import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcSlideComponent } from './pgc-slide.component';

describe('PgcSlideComponent', () => {
  let component: PgcSlideComponent;
  let fixture: ComponentFixture<PgcSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgcSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
