import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() onMobmenuOpen = new EventEmitter<boolean>();

  constructor() { }

  mobmenuOpen() {
    this.onMobmenuOpen.emit(true);
  }

  ngOnInit() {
  }

}
