import { TestBed } from '@angular/core/testing';

import { FormNewCoinService } from './form-new-coin.service';

describe('FormNewCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormNewCoinService = TestBed.get(FormNewCoinService);
    expect(service).toBeTruthy();
  });
});
