import { TestBed } from '@angular/core/testing';

import { ListfileService } from './listfile.service';

describe('ListfileService', () => {
  let service: ListfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
