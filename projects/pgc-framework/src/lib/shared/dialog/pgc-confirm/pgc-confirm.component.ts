import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pgc-confirm',
  standalone: true,
  imports: [],
  templateUrl: './pgc-confirm.component.html',
  styleUrl: './pgc-confirm.component.scss'
})
export class PgcConfirmComponent {
  @Input() message: string = '';
  @Input() closeDialog!: (args:any) => void;

  onClose(result:boolean): void {
    this.closeDialog(result);
  }
}
