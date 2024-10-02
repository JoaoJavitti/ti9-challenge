import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface SidebarItem {
  name: string;
  icon?: string;
  route?: string;
  elements?: SidebarItem[];
}

@Component({
  selector: 'pgc-sidebar',
  templateUrl: './pgc-sidebar.component.html',
  imports: [CommonModule, MatIconModule, RouterModule],
  standalone: true,
  styleUrls: ['./pgc-sidebar.component.scss']
})
export class PgcSidebarComponent {
  @Input() items: SidebarItem[] = [];

  expandedMenu: string | null = null;

  toggleSubMenu(itemName: string) {
    this.expandedMenu = this.expandedMenu === itemName ? null : itemName;
  }
}
