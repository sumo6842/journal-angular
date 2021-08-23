import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  template: `
    <h2>{{title}}</h2>
    {{course.title | uppercase | lowercase}}<br/>
    {{course.students | number}}<br/>
    {{course.rate | number:'2.2-2'}}<br/>
    {{course.price | currency:'USD'}}<br/>
    {{course.releaseDate | date:'shortDate'}}
  `  
})
export class CourseComponent implements OnInit {
  title = "This tilte from CourseComponent";
  course = {
    title: 'The Complete Angular',
    students: 30123,
    rate: 4.9745,
    price: 190.95175,
    releaseDate: new Date(2016, 4, 1) 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
