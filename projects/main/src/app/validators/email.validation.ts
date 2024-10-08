import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Injectable()
export class EmailValidator {
  static emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) { 
      return null;
    }

    const emaiLRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emaiLRegex.test(value)) {  //  Verifica se o vslor é número
      return null;
    }

    return { email: true }; // Se não, retorna o erro
  }
}