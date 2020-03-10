import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesListComponent } from './shoes-list.component';
import { MaterialModule } from '@mdv-fifteen/material';
import { RouterModule } from '@angular/router';

describe('ShoesListComponent', () => {
  let component: ShoesListComponent;
  let fixture: ComponentFixture<ShoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesListComponent ],
      imports: [
        MaterialModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
