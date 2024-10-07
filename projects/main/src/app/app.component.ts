import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ShareDataService } from './scripts/share-formdata.service';
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
      this.formData = this.shareFormDataService.getFormData();
      this.suppliers = this.shareFormDataService.getSuppliers();
    })
  }

  onSave() {
    if (window !== undefined) {
      if (this.suppliers.length > 0) {
        window.localStorage.setItem('ti9-suppliers', JSON.stringify(this.suppliers));
        this.dialog = true;
        this.message = "Registros salvos com sucesso!";
      }
      else {
        this.message = "Nada para salvar!";
        this.alert = true;
      }
    }
  }

  onLoad() {
    if (window !== undefined) {
      const data = window.localStorage.getItem('ti9-suppliers');
      if (data != null) this.shareFormDataService.setSuppliers(JSON.parse(data));
      else {
        this.message = "Nenhum dado salvo encontrado!";
        this.alert = true;
      }
    }
  }

  onClear() {
    if (window !== undefined) {
      this.confirm = true;
      this.message = "Tem certeza que quer remover todos os dados salvos?";
      this.shareFormDataService.setSuppliers([]);
    }
  }

  onAlertClose = () => {
    this.alert = false;
  }

  onDialogClose = () => {
    this.dialog = false;
  }

  onConfirmClose = (result: boolean) => {
    this.confirm = false;
    if (result) window.localStorage.removeItem('ti9-suppliers');
  }
}
