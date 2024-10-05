import { Component } from '@angular/core';
import { PgcCheckComponent } from '../pgc-check/pgc-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pgc-slide',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './pgc-slide.component.html',
  styleUrl: './pgc-slide.component.scss'
})
export class PgcSlideComponent extends PgcCheckComponent {

  constructor(){
    super();
  }
}
