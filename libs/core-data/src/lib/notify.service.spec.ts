import { TestBed } from '@angular/core/testing';

import { NotifyService } from './notify.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const service: NotifyService = TestBed.get(NotifyService);
    expect(service).toBeTruthy();
  });
});
