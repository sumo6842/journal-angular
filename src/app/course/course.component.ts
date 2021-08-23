import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  template: `
    <h2>{{title | summary}}</h2>
    
  `  
})
export class CourseComponent implements OnInit {
  title = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, esse?";
  
  constructor() { }

  ngOnInit(): void {
  }

}
