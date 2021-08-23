// import { CourseService } from './courses.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'author',
  // templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css'
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
  `
})
export class CourseComponent implements OnInit {
  onKeyUp(email:any) {
     console.log(email);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
