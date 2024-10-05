import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcSelectComponent } from './pgc-select.component';

describe('PgcSelectComponent', () => {
  let component: PgcSelectComponent;
  let fixture: ComponentFixture<PgcSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
