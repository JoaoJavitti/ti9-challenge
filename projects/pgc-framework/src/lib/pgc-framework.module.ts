import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    SharedModule,
    NgxChartsModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class PgcFrameworkModule { }
