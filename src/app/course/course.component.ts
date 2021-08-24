import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  template: `
    <h3>
      <em>{{title}}</em>
    </h3>
    <input [disabled]="isActive" [placeholder]="property_text">
    <input [attr.disabled]="disabled" [placeholder]="attribute_text"><br>
  `  
})
export class CourseComponent implements OnInit {
  title = " property binding must be a boolean value, while its corresponding attribute binding relies on whether the value is null or not";
  button = 'btn btn-primary';
  btn = ['btn', 'btn-secondary', 'active'];
  isActive = true;
  disabled= "any";
  property_text = "This is Property";
  attribute_text = "This is Attribute";
  change=true;
  constructor() { }

  ngOnInit(): void {
  }

}
