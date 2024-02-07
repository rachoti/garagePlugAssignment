import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  static validEmail(
    control: AbstractControl
  ): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const regex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    const valid = regex.test(control.value);
    return valid ? null : {validEmail: true};
  }
}
