import { Component } from '@angular/core';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'pgc-number-input',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask(),],
  templateUrl: './pgc-number-input.component.html',
  styleUrl: './pgc-number-input.component.scss'
})
export class PgcNumberInputComponent extends PgcInputComponent {

  constructor(){
    super();
    super.setHint("Digite um número...");
  }
}
