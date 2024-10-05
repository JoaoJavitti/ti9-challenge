import { Component, effect, inject, Inject, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ShareDataService } from './scripts/share-formdata.service';
import { PgcFrameworkModule } from 'pgc-framework';
import { Supplier } from './interfaces/supplier.model';
import { TableComponent } from './components/table/table.component';
import * as $ from 'jquery';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-main-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TableComponent, DataTablesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
  shareFormDataService = inject(ShareDataService);
  formData!: Supplier;
  suppliers: Supplier[] = [];

  constructor(){
    effect(() => {
      this.formData = this.shareFormDataService.getFormData();
      this.suppliers = this.shareFormDataService.getSuppliers();
    })
  }
}
