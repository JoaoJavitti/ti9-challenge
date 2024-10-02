import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pgc-button',
  standalone: true,
  imports: [],
  templateUrl: './pgc-button.component.html',
  styleUrl: './pgc-button.component.scss'
})
export class PgcButtonComponent {
  @Input()
  click!: (args: any) => void;
  @Input() label:string;

  constructor(){
    this.label = "Click"
  }
}
