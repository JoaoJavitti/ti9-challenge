import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pgc-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pgc-list-view.component.html',
  styleUrl: './pgc-list-view.component.scss'
})
export class PgcListViewComponent {
  @Input() items: any[] = [];
  selectedItem: any = null;

  selectItem(item: any) {
    this.selectedItem = this.selectedItem === item ? null : item;
  }
}
