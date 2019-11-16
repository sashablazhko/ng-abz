import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() onMobmenuOpen = new EventEmitter<string>();
  @Input() userData: IUser;

  constructor() { }

  mobmenuOpen(open: string) {
    this.onMobmenuOpen.emit(open);
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
