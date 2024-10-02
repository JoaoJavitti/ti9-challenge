import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorHelper, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'pgc-line-chart',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './pgc-line-chart.component.html',
  styleUrl: './pgc-line-chart.component.scss'
})
export class PgcLineChartComponent {
  @Input() data: any[] = [];
  @Input() xAxisLabel: string = 'X Axis';
  @Input() yAxisLabel: string = 'Y Axis';
  @Input() label:string = "Gráfico de Linhas";
  
  isExpanded: boolean = false;

  compactView: [number, number] = [280, 200]; 
  fullView: [number, number] = [800, 400];    


  constructor() {}

  ngOnInit(): void {}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
