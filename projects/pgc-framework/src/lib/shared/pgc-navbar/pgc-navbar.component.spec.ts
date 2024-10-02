import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcNavbarComponent } from './pgc-navbar.component';

describe('PgcNavbarComponent', () => {
  let component: PgcNavbarComponent;
  let fixture: ComponentFixture<PgcNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
