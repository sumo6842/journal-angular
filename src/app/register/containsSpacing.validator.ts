import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ContainsSpace {
  static containSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) return { containSpace: true };
    return null;
  }
}
