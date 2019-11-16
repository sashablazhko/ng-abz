import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobmenu',
  templateUrl: './mobmenu.component.html',
  styleUrls: ['./mobmenu.component.scss']
})
export class MobmenuComponent implements OnInit {

  @Input() isMobmenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
