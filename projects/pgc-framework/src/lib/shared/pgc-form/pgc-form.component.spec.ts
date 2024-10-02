import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcFormComponent } from './pgc-form.component';

describe('PgcFormComponent', () => {
  let component: PgcFormComponent;
  let fixture: ComponentFixture<PgcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
