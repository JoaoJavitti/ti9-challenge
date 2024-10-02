import { Component } from '@angular/core';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'pgc-textarea',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask(),],
  templateUrl: './pgc-textarea.component.html',
  styleUrl: './pgc-textarea.component.scss'
})
export class PgcTextAreaInputComponent extends PgcInputComponent {

  constructor(){
    super();
    super.setHint("Digite o texto...");
  }
}
