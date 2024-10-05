import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { map, Observable, startWith } from 'rxjs';
import { PgcInputComponent } from '../pgc-input/pgc-input.component';

@Component({
  selector: 'pgc-autocomplete',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './pgc-autocomplete.component.html',
  styleUrl: './pgc-autocomplete.component.scss'
})
export class PgcAutocompleteComponent extends PgcInputComponent {
  @Input() options: string[] = [];
  
  filteredOptions!: Observable<string[]>;
  showSuggestions: boolean = false; // Para controlar a visibilidade das sugestões

  constructor() {
    super();
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  selectOption(option: string) {
    this.control.setValue(option);
    this.showSuggestions = false; // Oculta a lista de sugestões
  }

  // Função para mostrar as sugestões
  displaySuggestions() {
    this.showSuggestions = true; // Exibe a lista de sugestões ao digitar
  }
}
