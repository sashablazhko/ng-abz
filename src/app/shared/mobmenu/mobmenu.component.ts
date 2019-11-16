import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-mobmenu',
  templateUrl: './mobmenu.component.html',
  styleUrls: ['./mobmenu.component.scss']
})
export class MobmenuComponent implements OnInit {

  @Input() isMobmenuOpen = false;
  @Input() userData: IUser;
  @Output() onMobmenuClose = new EventEmitter<string>();

  constructor() { }

  scrollTo(anchor: string): void {
    this.onMobmenuClose.emit('out');
    document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
