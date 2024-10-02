import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcPasswordComponent } from './pgc-password.component';

describe('PgcPasswordComponent', () => {
  let component: PgcPasswordComponent;
  let fixture: ComponentFixture<PgcPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
