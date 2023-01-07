import { TestBed } from '@angular/core/testing';

import { DepartServiceService } from './depart-service.service';

describe('DepartServiceService', () => {
  let service: DepartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
