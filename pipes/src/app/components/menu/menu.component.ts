import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public displayNav: boolean = false;

  constructor() { }

  openNav(){
    this.displayNav = true;
  }

  closeNav(){
    this.displayNav = false;
  }
}
