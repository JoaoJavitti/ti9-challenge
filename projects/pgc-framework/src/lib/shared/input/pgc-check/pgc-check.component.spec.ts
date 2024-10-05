import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcCheckComponent } from './pgc-check.component';

describe('PgcCheckComponent', () => {
  let component: PgcCheckComponent;
  let fixture: ComponentFixture<PgcCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgcCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
