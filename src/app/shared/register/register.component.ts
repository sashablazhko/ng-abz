import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '@app/services/register.service';
import { IPosition } from '@app/interfaces/position.interface';
import { UserService } from '@app/services/user.service';
import { PopupService } from '@app/services/popup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
    position: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required)
  });
  positionsData: IPosition[];
  fileFakePlaceholder: string = 'Upload your photo';
  currentFile: File = null;
  submitting: boolean = false;

  constructor(
    private registerService: RegisterService,
    private popupService: PopupService,
    private userService: UserService
  ) { }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get position() {
    return this.registerForm.get('position');
  }

  get file() {
    return this.registerForm.get('file');
  }

  fileSelected(e) {
    if (e && e.target && e.target.files) {
      this.fileFakePlaceholder = e.target.files[0].name;
      this.currentFile = e.target.files.item(0);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(e) {
    this.markFormGroupTouched(this.registerForm);

    if (!this.registerForm.valid) return;
    
    this.submitting = true;
    this.registerService.getToken()
      .subscribe(
        res => {
          if (res && res['token']) {
            const userData = {
              'name': this.name.value,
              'email': this.email.value,
              'phone': `+38${this.phone.value}`,
              'position_id': this.position.value
            }
            this.registerService.uploadUser(userData, res['token'], this.currentFile)
              .subscribe(
                res => {
                  if (res && res['success']) {
                    this.userService.fetchUsers(6);
                    this.submitting = false;
                    this.scrollTo('users');
                    this.registerForm.reset();
                    this.fileFakePlaceholder = 'Upload your photo';
                    this.popupService.popupStatus$.next(true);
                  }
                },
                err => {
                  console.log('err', err);
                  this.submitting = false;
                }
              );
          }
        },
        err => {
          console.log('err', err);
          this.submitting = false;
        }
      );
  }

  ngOnInit() {
    this.registerService.fetchPositions();

    this.registerService.positionsData$
      .subscribe(
        (positions: IPosition[]) => {
          if (positions) {
            this.positionsData = positions;
          }
        },
        err => {
          console.log('err', err);
        }
      )
  }

}
