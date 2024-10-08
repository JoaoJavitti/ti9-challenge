import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable()
export class DependentValidator {

    static dependentValidator(otherControlName: string, valueComparator:any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => { 
          const parent = control.parent; // Pega o FormGroup
      
          if (!parent) {  //  Se não está num FormGroup, não há dependência
            return null; 
          }
      
          const otherControl = parent.get(otherControlName);  //  O Controle do qual esse depende
      
          if (!otherControl) {  //  Se o controle do qual ele depende não existe, não há dependência
            return null; 
          }
      
          otherControl.valueChanges.subscribe(() => { //  Quando o outro controle é atualizado
            if(!otherControl.value) //  Se não há valor algum
                control.setValue(""); //  limpa o controle dependente
            control.updateValueAndValidity();   //  Atualiza a validação
          });
          
          if (otherControl.value == valueComparator && !control.value) {
            return { required: true };  //  Se o valor do controle for igual ao valor necessário e esse campo estiver vazio, retorne que ele é requirido
          }
      
          return null; // Se não, não retorne erro algum
        };
      }
}