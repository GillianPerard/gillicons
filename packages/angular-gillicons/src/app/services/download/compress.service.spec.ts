import { TestBed } from '@angular/core/testing';

import { CompressService } from './compress.service';

describe('CompressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompressService = TestBed.get(CompressService);
    expect(service).toBeTruthy();
  });
});
