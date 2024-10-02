import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcFrameworkComponent } from './pgc-framework.component';

describe('PgcFrameworkComponent', () => {
  let component: PgcFrameworkComponent;
  let fixture: ComponentFixture<PgcFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcFrameworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
