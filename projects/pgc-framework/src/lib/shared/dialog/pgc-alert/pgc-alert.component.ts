import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PgcDialogComponent } from '../pgc-dialog/pgc-dialog.component';


@Component({
  selector: 'pgc-alert',
  standalone: true,
  imports: [],
  templateUrl: './pgc-alert.component.html',
  styleUrl: './pgc-alert.component.scss'
})
export class PgcAlertComponent extends PgcDialogComponent {

  constructor(){
    super();
  }

  
}
