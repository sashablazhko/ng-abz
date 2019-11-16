import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from './services/user.service';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {

  menuState:string = 'out';
  userData: IUser;

  constructor(
    private userService: UserService
  ) {}

  mobmenuToggle(open) {
    this.menuState = open;
  }

  ngOnInit() {
    this.userService.fetchUser();

    this.userService.userData$.subscribe(
      (user: IUser) => {
        if (user) {
          this.userData = user;
        }
      },
      err => {
        console.log('err', err);
      }
    )
  }
}
