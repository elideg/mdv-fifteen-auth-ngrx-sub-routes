import { TestBed } from '@angular/core/testing';

import { ShoeService } from './shoes.service';

describe('ShoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoeService = TestBed.get(ShoeService);
    expect(service).toBeTruthy();
  });
});
