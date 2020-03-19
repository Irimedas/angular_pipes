import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nombre='alejandro martin';
  vector = [1,2,3,4,5,6,7];
  idiomas = [/*'castellano','ingles'*/];
  constructor() { }

  ngOnInit(): void {
  }

  existIdiomas(){
    return this.idiomas.length>0;
  }

}
