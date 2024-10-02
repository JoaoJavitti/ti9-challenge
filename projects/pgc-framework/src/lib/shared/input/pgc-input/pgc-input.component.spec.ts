import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcInputComponent } from './pgc-input.component';

describe('PgcInputComponent', () => {
  let component: PgcInputComponent;
  let fixture: ComponentFixture<PgcInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
