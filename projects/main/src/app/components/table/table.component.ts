import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, effect, inject, OnInit } from '@angular/core';
import { ShareDataService } from '../../scripts/share-formdata.service';
import { Supplier } from '../../interfaces/supplier.model';
import { DataTablesModule } from 'angular-datatables';
import DataTables, { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import DataTable from 'datatables.net-dt';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [HttpClientModule, DataTablesModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, AfterViewInit {

  tableColumns!: any;
  shareFormDataService = inject(ShareDataService);
  formData !: Supplier;
  suppliers: Supplier[] = [];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject<void>();
  dataTable!: any;

  constructor(private http: HttpClient) {
    effect(() => {
      this.formData = this.shareFormDataService.getFormData();

    });
    effect(() => {
      this.suppliers = this.shareFormDataService.getSuppliers();
      this.updateDataTable();
    })

    this.dtoptions = {
      pagingType: 'full',
      destroy: true,
    }
  }

  ngOnInit(): void {
    this.http.get('/assets/config/table-config.json').subscribe(config => {
      this.tableColumns = config;
      this.dttrigger.next(null);
      setTimeout(() => {
        this.initializeDataTable();
      });
    });
  }

  ngAfterViewInit(): void {
    $('tbody').on('click', '.btn-action', (event: any) => {
      const buttonType = $(event.currentTarget).data('action'); // "edit" ou "delete"
      const rowId = $(event.currentTarget).data('id');

      if (buttonType === 'edit') {
        this.onEdit(rowId);
      } else if (buttonType === 'delete') {
        this.onDelete(rowId);
      }
    });
  }

  initializeDataTable() {
    this.dataTable = $('#datatable').DataTable();
  }

  updateDataTable() {
    if (this.dataTable) {
      // Clear existing data (optional, consider using `rows.add()` directly)
      this.dataTable.clear();

      // Add new rows with buttons (using addRows function)
      this.addRows(this.suppliers);

      this.dataTable.draw();  // Redraw the table
    }
  }

  addRows(data: Supplier[]) {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
      const row = [];
      for (const column of this.tableColumns?.table?.columns || []) {
        row.push(this.getColumn(data[i], column));
      }

      // Add buttons to the last column (Actions)
      row.push(`<div class="button-container">
                <button data-action="edit" data-id="${i}" class="icon-button edit btn-action">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button data-action="delete" data-id="${i}" class="icon-button delete btn-action">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>`);
      rows.push(row);
    }
    this.dataTable.rows.add(rows).draw(); // Add rows and redraw
  }

  onEdit(editId: number) {
    const edit = this.suppliers[editId];
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
}
