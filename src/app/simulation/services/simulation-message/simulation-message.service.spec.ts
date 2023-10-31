import { TestBed } from '@angular/core/testing';

import { SimulationMessageService } from './simulation-message.service';

describe('SimulationMessageService', () => {
  let service: SimulationMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
