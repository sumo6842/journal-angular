// import { CourseService } from './courses.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'author',
  // templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css'
  template: `
    <input [value]="email" (keyup.enter)="email=$any($event.target).value;onKeyUp()" /> 

    <!--<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>-->
  `
})
export class CourseComponent implements OnInit {
  email = "13@gmail.com";
  onKeyUp() {
     console.log(this.email);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
