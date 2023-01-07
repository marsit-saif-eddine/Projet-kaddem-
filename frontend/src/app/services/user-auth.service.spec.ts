import { TestBed } from '@angular/core/testing';

import { userAuthService } from './user-auth.service ';

describe('ShareServiceService', () => {
  let service: userAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
