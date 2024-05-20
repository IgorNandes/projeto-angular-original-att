import { TestBed } from '@angular/core/testing';

import { ServiceUmService } from './service-um.service';

describe('ServiceUmService', () => {
  let service: ServiceUmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
