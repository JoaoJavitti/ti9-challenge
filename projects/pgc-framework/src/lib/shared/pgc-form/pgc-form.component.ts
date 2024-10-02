import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PgcButtonComponent } from '../pgc-button/pgc-button.component';

@Component({
  selector: 'pgc-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PgcButtonComponent],
  templateUrl: './pgc-form.component.html',
  styleUrl: './pgc-form.component.scss'
})
export class PgcFormComponent {
  @Input() formGroup!: FormGroup;  
  @Input() columns: number = 1;
  @Input() onSubmit!: (args: any) => void; 


  getGridTemplateColumns(): string {
    return `repeat(${this.columns}, 1fr)`;
  }

  reset = () => {
    console.log(this.formGroup)
    this.formGroup.reset();
  };
}
