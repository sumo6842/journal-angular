import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ]
  constructor() {}

  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
  }

  ngOnInit(): void {}
}
