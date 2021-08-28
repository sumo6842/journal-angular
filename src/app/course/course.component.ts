import { Component, OnInit } from '@angular/core';
import { course } from './course';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  _course: course;
  categories = [
    {id: 1, name: 'Developer'},
    {id: 2, name: 'Artist'},
    {id: 3, name: 'Music'},
    {id: 4, name: 'Game'},
    {id: 5, name: 'Tip'},
  ]

  constructor() {
    this._course = new course('', '', false);
  }

  submit(course: course) {
    console.log(course);
  }

}
