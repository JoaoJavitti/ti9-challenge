import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'pgc-autocomplete',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './pgc-autocomplete.component.html',
  styleUrl: './pgc-autocomplete.component.scss'
})
export class PgcAutocompleteComponent {
  @Input() label: string = '';
  @Input() hint: string = '';
  @Input() options: string[] = [];
  @Input() control: FormControl = new FormControl();
  
  filteredOptions!: Observable<string[]>;
  showSuggestions: boolean = false; // Para controlar a visibilidade das sugestões

  constructor() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get invalid() {
    return this.control.invalid && this.control.touched;
  }

  getErrorMessage() {
    return 'Campo inválido';
  }

  vanishHint() {
    return this.control.value && this.control.value.length > 0;
  }

  errorClass() {
    return { 'error': this.invalid };
  }

  selectOption(option: string) {
    console.log('Selected option:', option); // Adicione um console.log para verificar se está sendo chamado
    this.control.setValue(option);
    this.showSuggestions = false; // Oculta a lista de sugestões
  }

  checkError() {
      let blurTimeout = setTimeout(() => {
        this.showSuggestions = false; // Oculta a lista de sugestões
      }, 200); // Delay de 200ms (ajuste conforme necessário)
  }

  // Função para mostrar as sugestões
  displaySuggestions() {
    this.showSuggestions = true; // Exibe a lista de sugestões ao digitar
  }
}
