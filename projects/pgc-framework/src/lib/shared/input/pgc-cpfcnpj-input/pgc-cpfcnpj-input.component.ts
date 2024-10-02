import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validator, ValidatorFn, Validators } from '@angular/forms';
import { errorMessages } from '../../info/error-messages';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'pgc-cpfcnpj-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask(),],
  templateUrl: './pgc-cpfcnpj-input.component.html',
  styleUrl: './pgc-cpfcnpj-input.component.scss'
})
export class PgcCpfCnpjInputComponent extends PgcInputComponent {

  readonly cpf: string = '000.000.000-000';
  readonly cnpj: string = '00.000.000/0000-00';
  cpfCnpjMask: string;

  constructor(){
    super();
    this.cpfCnpjMask = this.cpf;
    super.addValidators(Validators.minLength(11));
    super.addValidators(Validators.maxLength(14));
    super.addValidators(cpfCnpjValidator);
    super.setHint('Digite o CPF/CNPJ...');
  }

  changeMask() {
    let value = this.control.value!=null?this.control.value:"";
    if (value.length > 11) {
      this.cpfCnpjMask = this.cnpj; // Máscara de CNPJ
    } else {
      this.cpfCnpjMask = this.cpf; // Máscara de CPF
    }
  }

}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfCnpjValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // Se o valor não for preenchido, não retornar erro (uso do 'required' para verificar preenchimento)
  if (!value) {
    return null;
  }

  // Aceitar somente se o valor tiver exatamente 11 ou 14 caracteres
  if (value.length === 11 || value.length === 14) {
    return null; // Válido
  }

  // Se o tamanho não for 11 ou 14, retornar um erro
  return { cpfCnpjInvalidLength: true };
}
