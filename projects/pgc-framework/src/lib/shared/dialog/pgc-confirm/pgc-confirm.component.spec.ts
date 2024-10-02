import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcConfirmComponent } from './pgc-confirm.component';

describe('PgcConfirmComponent', () => {
  let component: PgcConfirmComponent;
  let fixture: ComponentFixture<PgcConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
