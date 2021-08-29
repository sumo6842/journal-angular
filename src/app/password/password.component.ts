import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: [
        '',
        Validators.required,
        PasswordValidators.validOldPassword,
      ],
      newpassword: [
        '',
        Validators.required
      ],
      confirmpassword: [
        '',
        Validators.required,
      ],
    }, {
      validators: PasswordValidators.passwordShouldMatch
    });
  }

  get oldpassword(): FormControl {
    return this.form.get('oldpassword') as FormControl;
  }
  get newpassword(): FormControl {
    return this.form.get('newpassword') as FormControl;
  }

  get confirmpassword(): FormControl {
    return this.form.get('confirmpassword') as FormControl;
  }

  ngOnInit(): void {}
}
