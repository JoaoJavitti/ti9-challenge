import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pgc-check',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pgc-check.component.html',
  styleUrl: './pgc-check.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PgcCheckComponent),
      multi: true
    }
  ]
})
export class PgcCheckComponent implements ControlValueAccessor {
  @Input() value: string;
  @Input() label:string;
  @Input() hint:string;
  @Input() control: FormControl;
  @Input() onChange!:(args:any)=>{};
  @Input() onTouched!:(args:any)=>{};

  constructor(){
    this.value = "";
    this.label = "";
    this.hint = "";
    this.control = new FormControl(false);
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
