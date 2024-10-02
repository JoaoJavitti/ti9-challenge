import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcCpfCnpjInputComponent } from './pgc-cpfcnpj-input.component';

describe('PgcInputComponent', () => {
  let component: PgcCpfCnpjInputComponent;
  let fixture: ComponentFixture<PgcCpfCnpjInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcCpfCnpjInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcCpfCnpjInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
