import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  scrollTo(anchor: string): void {
    document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
