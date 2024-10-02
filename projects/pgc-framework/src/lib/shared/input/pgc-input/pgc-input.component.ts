import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validator, ValidatorFn } from '@angular/forms';
import { errorMessages, getErrorMessage } from '../../info/error-messages';

@Component({
  selector: 'pgc-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pgc-input.component.html',
  styleUrl: './pgc-input.component.scss'
})
export class PgcInputComponent {
  @Output() valueEmitter;
  @Input() value: string;
  @Input() label:string;
  @Input() hint:string;
  @Input() control;
  class:string;
  invalid;

  constructor(){
    this.hint = "";
    this.control = new FormControl("");
    this.value = "";
    this.valueEmitter = new EventEmitter<string>();
    this.label = "";
    this.class = "";
    this.invalid = false;
  }

  errorClass(){
    if(this.invalid) return 'error';
    return '';
  }

  checkError(){
    this.invalid = this.control.invalid;
  }

  vanishHint(){
    return this.control.value == "";
  }

  getErrorMessage(): string {
    return getErrorMessage(this.control);
  }
  
  addValidators(valid:ValidatorFn){
    this.control.addValidators(valid);
  }

  setHint(hint:string){
    this.hint = hint;
  }

}
