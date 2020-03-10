import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesItemComponent } from './shoes-item.component';
import { MaterialModule } from '@mdv-fifteen/material';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ShoesFacade } from '@mdv-fifteen/core-state';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

describe('ShoesItemComponent', () => {
  let component: ShoesItemComponent;
  let fixture: ComponentFixture<ShoesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesItemComponent ],
      imports: [
       MaterialModule,
       RouterModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        },
        ShoesFacade,
        provideMockStore()
      ]
    })
    .overrideTemplate(ShoesItemComponent, '')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
