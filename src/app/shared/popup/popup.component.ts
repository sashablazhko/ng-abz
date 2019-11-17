import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from '@app/services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  popupStatus;

  constructor(
    private popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.popupStatus$
      .subscribe(
        status => {
          this.popupStatus = status;
        }
      )
  }

}
