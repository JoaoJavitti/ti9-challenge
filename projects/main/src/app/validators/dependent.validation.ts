import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable()
export class DependentValidator {

    static dependentValidator(otherControlName: string, valueComparator:any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const parent = control.parent;
      
          if (!parent) {
            return null; 
          }
      
          const otherControl = parent.get(otherControlName);
      
          if (!otherControl) {
            return null; 
          }
      
          otherControl.valueChanges.subscribe(() => {
            if(!otherControl.value)
                control.setValue("");
            control.updateValueAndValidity(); 
          });
          
          if (otherControl.value == valueComparator && !control.value) {
            return { required: true }; 
          }
      
          return null; 
        };
      }
}