import { TestBed } from '@angular/core/testing';

import { LigneCommandeServiceService } from './ligne-commande-service.service';

describe('LigneCommandeServiceService', () => {
  let service: LigneCommandeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneCommandeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
