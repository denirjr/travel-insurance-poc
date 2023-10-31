import { TestBed } from '@angular/core/testing';

import { SimulationResultService } from './simulation-result.service';

describe('SimulationResultService', () => {
  let service: SimulationResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
