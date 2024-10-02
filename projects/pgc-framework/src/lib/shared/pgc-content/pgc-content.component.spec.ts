import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcContentComponent } from './pgc-content.component';

describe('PgcContentComponent', () => {
  let component: PgcContentComponent;
  let fixture: ComponentFixture<PgcContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
