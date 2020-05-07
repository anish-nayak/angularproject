import { TestBed } from '@angular/core/testing';

import { VoterRegisterationService } from './voter-registeration.service';

describe('VoterRegisterationService', () => {
  let service: VoterRegisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterRegisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
