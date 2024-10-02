import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pgc-dialog',
  standalone: true,
  imports: [],
  templateUrl: './pgc-dialog.component.html',
  styleUrl: './pgc-dialog.component.scss'
})
export class PgcDialogComponent {
  @Input() message: string = '';
  @Input() closeDialog!: (args:any) => void;

  onClose(): void {
    this.closeDialog(null);
  }
}
