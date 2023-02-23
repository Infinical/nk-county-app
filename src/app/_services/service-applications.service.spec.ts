import { TestBed } from '@angular/core/testing';

import { ServiceApplicationsService } from './service-applications.service';

describe('ServiceApplicationsService', () => {
  let service: ServiceApplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
