import { UsernameValidators } from './../signup/username.validators';
import { ContainsSpace } from './containsSpacing.validator';
import {
  FormGroup,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        ContainsSpace.containSpace,
      ]),
    });
  }
  get username() {
    return this.form.get('username');
  }
}
