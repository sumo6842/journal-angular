import { AbstractControl } from '@angular/forms';
export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if(control.value !== '1234')
        resolve({invalidOldPassword: true});
      else resolve(null);
    })
  }
  static passwordShouldMatch(control: AbstractControl) {
    let password = control.get('newpassword');
    let confirmPass = control.get('confirmpassword');
    if(password?.value !== confirmPass?.value) {
      return {passwordShouldMatch: true};
    
    }
    return null;
  }
}