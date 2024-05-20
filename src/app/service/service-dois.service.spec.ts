import { TestBed } from '@angular/core/testing';

import { ServiceDoisService } from './service-dois.service';

describe('ServiceDoisService', () => {
  let service: ServiceDoisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDoisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
