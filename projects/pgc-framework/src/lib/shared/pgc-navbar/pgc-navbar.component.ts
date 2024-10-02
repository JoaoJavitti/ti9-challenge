import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pgc-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pgc-navbar.component.html',
  styleUrl: './pgc-navbar.component.scss'
})
export class PgcNavbarComponent {

  @Input() menuItems: any[] = [];

  toggleSubMenu(item: any): void {
    item.isOpen = !item.isOpen;
  }
}
