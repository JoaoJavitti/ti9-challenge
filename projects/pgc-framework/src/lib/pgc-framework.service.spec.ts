import { TestBed } from '@angular/core/testing';

import { PgcFrameworkService } from './pgc-framework.service';

describe('PgcFrameworkService', () => {
  let service: PgcFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgcFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
