import { TestBed } from '@angular/core/testing';

import { AuthGaurd } from './auth-guard';

describe('AuthGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGaurd = TestBed.get(AuthGaurd);
    expect(service).toBeTruthy();
  });
});
