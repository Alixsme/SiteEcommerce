import { TestBed } from '@angular/core/testing';

import { BasiAuthentificationServiceService } from './basi-authentification-service.service';

describe('BasiAuthentificationServiceService', () => {
  let service: BasiAuthentificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasiAuthentificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
