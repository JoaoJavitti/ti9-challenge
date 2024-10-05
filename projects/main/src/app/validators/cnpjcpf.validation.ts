import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Injectable()
export class CpfCnpjValidator {
    // Name validation 
        static cpfCnpjValidator(control: AbstractControl): ValidationErrors | null {
            const value = control.value;
          
            // Se o valor não for preenchido, não retornar erro (uso do 'required' para verificar preenchimento)
            if (!value) {
              return null;
            }
          
            // Aceitar somente se o valor tiver exatamente 11 ou 14 caracteres
            if (value.length === 14 || value.length === 18) {
              return null; // Válido
            }
          
            // Se o tamanho não for 11 ou 14, retornar um erro
            return { cpfCnpjInvalidLength: true };
          }
}