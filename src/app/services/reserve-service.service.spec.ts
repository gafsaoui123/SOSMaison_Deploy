import { TestBed } from '@angular/core/testing';

import { ReserveServiceService } from './reserve-service.service';

describe('ReserveServiceService', () => {
  let service: ReserveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
