import { TestBed } from '@angular/core/testing';

import { CitasSevicioService } from './citas-sevicio.service';

describe('CitasSevicioService', () => {
  let service: CitasSevicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasSevicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
