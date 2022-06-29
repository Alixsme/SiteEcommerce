import { TestBed } from '@angular/core/testing';

import { LignePanierServiceService } from './ligne-panier-service.service';

describe('LignePanierServiceService', () => {
  let service: LignePanierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignePanierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
