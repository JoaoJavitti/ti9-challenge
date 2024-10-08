import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ShareDataService } from './services/share-formdata.service';
import { PgcFrameworkModule } from 'pgc-framework';
import { Supplier } from './interfaces/supplier.model';
import { TableComponent } from './components/table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-main-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TableComponent, DataTablesModule, MatTableModule, MatTable, MatCardModule, MatIconModule,
    MatButtonModule, PgcFrameworkModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
  shareFormDataService = inject(ShareDataService);
  formData!: Supplier;
  suppliers: Supplier[] = [];

  message: string = "";
  alert: boolean = false;
  confirm: boolean = false;
  dialog: boolean = false;

  constructor() {
    effect(() => {
      this.formData = this.shareFormDataService.getFormData();  //  Atualiza valor do formulário
      this.suppliers = this.shareFormDataService.getSuppliers(); // Atualiza a lista de fornecedores
    })
  }

  onSave() {
    if (window !== undefined) { //  Se estamos em client-side
      if (this.suppliers.length > 0) {  //  Se houver algo para salvar
        window.localStorage.setItem('ti9-suppliers', JSON.stringify(this.suppliers)); //  Salva no localstorage
        this.dialog = true; //  Abre o dialog de sucesso
        this.message = "Registros salvos com sucesso!"; //  Altera mensagem
      }
      else {
        this.message = "Nada para salvar!"; // Altera a mensagem
        this.alert = true;  //  Abre o alert de erro
      }
    }
  }

  onLoad() {
    if (window !== undefined) { //  Se estamos em client-side
      const data = window.localStorage.getItem('ti9-suppliers'); // Pega a data salva no localStorage
      if (data != null) this.shareFormDataService.setSuppliers(JSON.parse(data)); //  Se houver data, atualizar a lista
      else {  //  Se não
        this.message = "Nenhum dado salvo encontrado!"; //  Altera a mensagem
        this.alert = true;  //  Abre o alert de erro
      }
    }
  }

  onClear() {
    if (window !== undefined) {
      this.confirm = true;  //  Abre o dialog para confirmar
      this.message = "Tem certeza que quer remover todos os dados salvos?"; //  Altera mensagem
    }
  }

  onAlertClose = () => {
    this.alert = false; //  Fecha o alert de erro
  }

  onDialogClose = () => {
    this.dialog = false;  //  Fecha o dialog de sucesso
  }

  onConfirmClose = (result: boolean) => {
    this.confirm = false; //  Fecha o dialog para confirmar
    if (result) {   //  Se o usuário confirmou, apague os valores do localStorage e do signal
      window.localStorage.removeItem('ti9-suppliers');
      this.shareFormDataService.setSuppliers([]);
     }  //  Se não, não faça nada
  }
}
