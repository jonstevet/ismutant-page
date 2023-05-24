import { TestBed } from '@angular/core/testing';

import { IsmutantService } from './ismutant.service';

describe('IsmutantService', () => {
  let service: IsmutantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsmutantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
