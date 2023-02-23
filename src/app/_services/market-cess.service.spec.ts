import { TestBed } from '@angular/core/testing';

import { MarketCessService } from './market-cess.service';

describe('MarketCessService', () => {
  let service: MarketCessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketCessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
