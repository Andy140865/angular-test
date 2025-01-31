import { TestBed } from '@angular/core/testing';

import { ProfilePubgService } from './ProfilePubgService';

describe('ProfilePubgService', () => {
  let service: ProfilePubgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePubgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
