import { TestBed } from '@angular/core/testing';

import { FirecontractService } from './firecontract.service';

describe('FirecontractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirecontractService = TestBed.get(FirecontractService);
    expect(service).toBeTruthy();
  });
});
