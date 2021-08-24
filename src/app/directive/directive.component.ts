import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required/>
    <p>Value: {{name}}</p>
    <p>Valid: {{ctrl.valid}}</p>
    <button (click)="setValid()">Set value</button>
  `
})
export class DirectiveComponent implements OnInit {
  name= '';
  constructor() { }

  setValid() {
    console.log(this.name);
  }

  ngOnInit(): void {
  }

}
