import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcLineChartComponent } from './pgc-line-chart.component';

describe('PgcLineChartComponent', () => {
  let component: PgcLineChartComponent;
  let fixture: ComponentFixture<PgcLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
