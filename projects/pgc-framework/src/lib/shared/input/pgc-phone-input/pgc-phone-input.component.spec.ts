import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcPhoneInputComponent } from './pgc-phone-input.component';

describe('PgcPhoneInputComponent', () => {
  let component: PgcPhoneInputComponent;
  let fixture: ComponentFixture<PgcPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcPhoneInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
