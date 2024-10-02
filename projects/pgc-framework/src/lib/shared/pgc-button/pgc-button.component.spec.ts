import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcButtonComponent } from './pgc-button.component';

describe('PgcButtonComponent', () => {
  let component: PgcButtonComponent;
  let fixture: ComponentFixture<PgcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
