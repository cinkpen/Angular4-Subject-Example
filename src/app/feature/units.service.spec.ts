import { TestBed, inject } from '@angular/core/testing';

import { UnitsService } from './view-units/units.service';

describe('UnitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitsService]
    });
  });

  it('should ...', inject([UnitsService], (service: UnitsService) => {
    expect(service).toBeTruthy();
  }));
});
