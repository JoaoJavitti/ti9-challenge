import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcListViewComponent } from './pgc-list-view.component';

describe('PgcListViewComponent', () => {
  let component: PgcListViewComponent;
  let fixture: ComponentFixture<PgcListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
