import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetailsComponent } from './shoes-details.component';
import { MaterialModule } from '@mdv-fifteen/material';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('ShoesDetailsComponent', () => {
  let component: ShoesDetailsComponent;
  let fixture: ComponentFixture<ShoesDetailsComponent>;
  let formBuilder: FormBuilder = new FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesDetailsComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .overrideTemplate(ShoesDetailsComponent, '')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
