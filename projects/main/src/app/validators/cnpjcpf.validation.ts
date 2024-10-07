import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Injectable()
export class CpfCnpjValidator {
  static cpfCnpjValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const numberRegex = /^\d+$/;
    if (numberRegex.test(value)) {
      return null;
    }

    if (value.length === 14 || value.length === 18) {
      return null; // Válido
    }

    return { cpfCnpjInvalidLength: true };
  }
}