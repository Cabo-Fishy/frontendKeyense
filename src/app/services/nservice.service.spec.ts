import { TestBed } from '@angular/core/testing';

import { NserviceService } from './nservice.service';

describe('NserviceService', () => {
  let service: NserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
