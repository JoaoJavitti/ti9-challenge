import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, effect, inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ShareDataService } from '../../scripts/share-formdata.service';
import { Supplier } from '../../interfaces/supplier.model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PgcAutocompleteComponent } from "../../../../../pgc-framework/src/lib/shared/input/pgc-autocomplete/pgc-autocomplete.component";
import { PgcFrameworkModule } from 'pgc-framework';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule, PgcFrameworkModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {

  tableColumns!: any;
  shareFormDataService = inject(ShareDataService);
  formData !: Supplier;
  suppliers: Supplier[] = [];

  filtro: FormControl = new FormControl("");

  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {
    effect(() => {
      this.formData = this.shareFormDataService.getFormData();

    });
    effect(() => {
      this.suppliers = this.shareFormDataService.getSuppliers();
      this.dataSource = new MatTableDataSource<Supplier>(this.suppliers);
      this.dataSource.paginator = this.paginator;
    });

    this.filtro.valueChanges.subscribe((value:string) => {
      this.dataSource.filter = value;
    })
  }

  ngOnInit(): void {
    this.http.get('/assets/config/table-config.json').subscribe(config => {
      this.tableColumns = config;
    });
  }

  onEdit(edit:Supplier) {
    this.formData = edit;
    this.shareFormDataService.setFormData(edit);
  }

  onDelete(index: number) {
    this.shareFormDataService.removeSupplier(index);
  }

  getColumn(supplier: Supplier, column: string) {
    const col = column.charAt(0).toLowerCase() + column.slice(1).replace(" ", "").replace("/", "");
    return supplier[col];
  }

  autocompleteOptions(): {label:string, value:string}[]{
    return this.suppliers.map(s => {
      return {
        label:s.nome,
        value: s.nome + s.cnpjCpf + s.codigo
      }
    })
  }
}
