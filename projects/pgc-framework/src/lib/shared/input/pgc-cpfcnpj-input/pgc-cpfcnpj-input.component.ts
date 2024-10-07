import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validator, ValidatorFn, Validators } from '@angular/forms';
import { errorMessages } from '../../info/error-messages';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'pgc-cpfcnpj-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask(),],
  templateUrl: './pgc-cpfcnpj-input.component.html',
  styleUrl: './pgc-cpfcnpj-input.component.scss'
})
export class PgcCpfCnpjInputComponent extends PgcInputComponent {

  readonly cpf: string = '000.000.000-000';
  readonly cpfTrue: string = '000.000.000-00';
  readonly cnpj: string = '00.000.000/0000-00';
  cpfCnpjMask: string;

  constructor() {
    super();
    this.cpfCnpjMask = this.cpf;
    super.setHint('Digite o CPF/CNPJ...');
    super.addValidators(Validators.minLength(14));
    super.addValidators(Validators.maxLength(18));
    super.addValidators(cpfCnpjValidator);
  }

  onInputChange(): void {
    if (this.control.value != null) {
      let value = this.control.value.replace(/\D/g, '');

      if (value.length <= 11) {
        // Formatar como CPF: 000.000.000-00
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      } else {
        // Formatar como CNPJ: 00.000.000/0000-00
        value = value.replace(/^(\d{2})(\d)/, '$1.$2');
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
        value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
      }

      this.control.setValue(value, { emitEvent: false }); // Atualiza o valor formatado sem disparar um evento
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
  if (value.length === 14 || value.length === 18) {
    return null; // Válido
  }

  // Se o tamanho não for 11 ou 14, retornar um erro
  return { cpfCnpjInvalidLength: true };
}


