import { TestBed } from '@angular/core/testing';

import { AuthGaurd } from './auth-guard';
import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AuthGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([]),
      MatSnackBarModule
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  }));

  it('should be created', () => {
    const service: AuthGaurd = TestBed.get(AuthGaurd);
    expect(service).toBeTruthy();
  });
});
// describe('AuthGuard', () => {
//   it('should work', () => {
//     expect(true).toBeTruthy()
//   })
// })