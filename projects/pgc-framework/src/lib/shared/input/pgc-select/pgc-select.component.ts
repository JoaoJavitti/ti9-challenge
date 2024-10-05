import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';


@Component({
  selector: 'pgc-select',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pgc-select.component.html',
  styleUrl: './pgc-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PgcSelectComponent),
      multi: true
    }
  ]
})
export class PgcSelectComponent extends PgcInputComponent implements ControlValueAccessor{
  @Input() options: any[] = [];
  
  constructor(){
    super();
  }
}
