import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcDialogComponent } from './pgc-dialog.component';

describe('PgcDialogComponent', () => {
  let component: PgcDialogComponent;
  let fixture: ComponentFixture<PgcDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
