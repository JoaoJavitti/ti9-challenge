import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validator, ValidatorFn } from '@angular/forms';
import { errorMessages, getErrorMessage } from '../../info/error-messages';

@Component({
  selector: 'pgc-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pgc-input.component.html',
  styleUrl: './pgc-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PgcInputComponent),
      multi: true
    }
  ]
})
export class PgcInputComponent implements ControlValueAccessor {
  @Output() valueEmitter;
  @Input() value: string;
  @Input() label:string;
  @Input() hint:string;
  @Input() control;
  @Input() onChange!:(args:any)=>{};
  @Input() onTouched!:(args:any)=>{};
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

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
