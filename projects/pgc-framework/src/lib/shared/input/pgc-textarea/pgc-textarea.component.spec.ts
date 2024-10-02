import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcTextAreaInputComponent } from './pgc-textarea.component';

describe('PgcNumberInputComponent', () => {
  let component: PgcTextAreaInputComponent;
  let fixture: ComponentFixture<PgcTextAreaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcTextAreaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcTextAreaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
