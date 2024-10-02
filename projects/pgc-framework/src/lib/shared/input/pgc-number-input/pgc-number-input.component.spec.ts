import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcNumberInputComponent } from './pgc-number-input.component';

describe('PgcNumberInputComponent', () => {
  let component: PgcNumberInputComponent;
  let fixture: ComponentFixture<PgcNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcNumberInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
