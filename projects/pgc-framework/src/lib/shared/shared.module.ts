import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgcInputComponent } from './input/pgc-input/pgc-input.component';
import { PgcPasswordComponent } from './input/pgc-password/pgc-password.component';
import { PgcPhoneInputComponent } from './input/pgc-phone-input/pgc-phone-input.component';
import { PgcNumberInputComponent } from './input/pgc-number-input/pgc-number-input.component';
import { PgcCpfCnpjInputComponent } from './input/pgc-cpfcnpj-input/pgc-cpfcnpj-input.component';
import { PgcTextAreaInputComponent } from './input/pgc-textarea/pgc-textarea.component';
import { PgcContentComponent } from './pgc-content/pgc-content.component';
import { PgcAutocompleteComponent } from './input/pgc-autocomplete/pgc-autocomplete.component';
import { PgcListViewComponent } from './pgc-list-view/pgc-list-view.component';
import { PgcNavbarComponent } from './pgc-navbar/pgc-navbar.component';
import { PgcConfirmComponent } from './dialog/pgc-confirm/pgc-confirm.component';
import { PgcAlertComponent } from './dialog/pgc-alert/pgc-alert.component';
import { PgcDialogComponent } from './dialog/pgc-dialog/pgc-dialog.component';
import { PgcLineChartComponent } from './pgc-line-chart/pgc-line-chart.component';
import { PgcButtonComponent } from './pgc-button/pgc-button.component';
import { PgcFormComponent } from './pgc-form/pgc-form.component';
import { PgcSidebarComponent } from './pgc-sidebar/pgc-sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    PgcInputComponent, PgcPasswordComponent, PgcPhoneInputComponent, PgcNumberInputComponent, PgcCpfCnpjInputComponent, PgcTextAreaInputComponent,
    PgcButtonComponent, PgcLineChartComponent, PgcDialogComponent, PgcAlertComponent, PgcConfirmComponent, PgcNavbarComponent, PgcListViewComponent, PgcAutocompleteComponent, PgcContentComponent,
    PgcFormComponent, PgcSidebarComponent
  ],
  exports: [
    PgcInputComponent, PgcPasswordComponent, PgcPhoneInputComponent, PgcNumberInputComponent, PgcCpfCnpjInputComponent, PgcTextAreaInputComponent,
    PgcButtonComponent, PgcLineChartComponent, PgcDialogComponent, PgcAlertComponent, PgcConfirmComponent, PgcNavbarComponent, PgcListViewComponent, PgcAutocompleteComponent, PgcContentComponent,
    PgcFormComponent, PgcSidebarComponent
  ]
})
export class SharedModule { }
