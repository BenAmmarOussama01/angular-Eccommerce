import { TestBed } from '@angular/core/testing';

import { ChechoutService } from './chechout.service';

describe('ChechoutService', () => {
  let service: ChechoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChechoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
