import { TestBed } from '@angular/core/testing';

import { GetphotosService } from './getphotos.service';

describe('GetphotosService', () => {
  let service: GetphotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetphotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
