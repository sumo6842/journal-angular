import { AuthorService } from './../author.service';
// import { CourseService } from './courses.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'author',
  // templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css'
  template: `

  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div>
  `
})
export class CourseComponent implements OnInit {
  title = "List Of Course";
  imageUrl = "https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

  isActive = false;
  colSpan = 2;

  onSave($event:any) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log("Div was cliked!!!");
    
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
