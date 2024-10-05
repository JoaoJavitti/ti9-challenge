import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable()
export class DependentValidator {

    static dependentValidator(otherControlName: string, valueComparator:any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const parent = control.parent;
      
          if (!parent) {
            return null; // Se o controle não estiver dentro de um FormGroup
          }
      
          const otherControl = parent.get(otherControlName);
      
          if (!otherControl) {
            return null; // Se o controle dependente não existir
          }
      
          // Observa as mudanças no controle dependente
          otherControl.valueChanges.subscribe(() => {
            if(!otherControl.value)
                control.setValue("");
            control.updateValueAndValidity(); // Atualiza a validade do controle atual
          });
          
          // Validação condicional
          if (otherControl.value == valueComparator && !control.value) {
            return { required: true }; // Retorna erro se o controle estiver vazio
          }
      
          return null; // Sem erro de validação
        };
      }
}