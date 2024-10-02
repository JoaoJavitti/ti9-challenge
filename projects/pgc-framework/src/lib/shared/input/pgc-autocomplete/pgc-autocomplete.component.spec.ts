import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcAutocompleteComponent } from './pgc-autocomplete.component';

describe('PgcAutocompleteComponent', () => {
  let component: PgcAutocompleteComponent;
  let fixture: ComponentFixture<PgcAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
