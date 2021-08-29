import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'new-form-group',
  templateUrl: './new-form-group.component.html',
  styleUrls: ['./new-form-group.component.css']
})
export class NewFormGroupComponent implements OnInit {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: fb.group({
        email: [],
        phone: []
      }), 
      topics: fb.array([])
    })
   }

   get name() {
     return this.form.get('name');
   }

  ngOnInit(): void {
  
  }
  addTopic(topic: HTMLInputElement) {
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
  }
  removeTopic(topic:FormArray) {
   let index = this.topics.controls.indexOf(topic);
   this.topics.removeAt(index);
  }

  get topics() {return this.form.get('topics') as FormArray;}
}
