import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcAlertComponent } from './pgc-alert.component';

describe('PgcAlertComponent', () => {
  let component: PgcAlertComponent;
  let fixture: ComponentFixture<PgcAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
