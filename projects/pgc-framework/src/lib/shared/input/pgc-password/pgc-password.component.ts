import { Component } from '@angular/core';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'pgc-password',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, MatIconModule],
  templateUrl: './pgc-password.component.html',
  styleUrl: './pgc-password.component.scss'
})
export class PgcPasswordComponent extends PgcInputComponent {

  hidePassword:boolean;

  constructor(){
    super();
    super.addValidators(Validators.required);
    this.hidePassword = false;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // Alterna a visibilidade
  }

}
