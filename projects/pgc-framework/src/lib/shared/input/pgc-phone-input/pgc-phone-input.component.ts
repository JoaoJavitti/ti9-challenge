import { Component } from '@angular/core';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'pgc-phone-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask(),],
  templateUrl: './pgc-phone-input.component.html',
  styleUrl: './pgc-phone-input.component.scss'
})
export class PgcPhoneInputComponent extends PgcInputComponent {

  constructor() {
    super();
    super.setHint('+00 (00) 00000-0000');
  }

}
