import { defaultState, ShoesFacade } from '@mdv-fifteen/core-state';
import { Shoe } from '@mdv-fifteen/core-data';
import { MaterialModule } from '@mdv-fifteen/material';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { ShoesDetailsComponent } from './shoes-details/shoes-details.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ShoesComponent } from './shoes.component';

// Declare mock variables, services, and a store
describe('ShoesComponent', () => {
  let component: ShoesComponent;
  let fixture: ComponentFixture<ShoesComponent>;
  let shoesFacade: ShoesFacade;
  let store: MockStore<any>;
  const formBuilder: FormBuilder = new FormBuilder();
  const testObject: Shoe = {
    id: "1",
    title: "Mock Title",
    details: "Mock Details",
    coolLevel: 69
  }
  const emptyTestObject: Shoe = {
    id: null,
    title: null,
    details: null,
    coolLevel: null
  }

// Import modules that you are going to need
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoesComponent,
        ShoesListComponent,
        ShoesDetailsComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        provideMockStore(),
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

// Initialize variables and store inside the testbed
  beforeEach(() => {
    store = TestBed.get(Store);
    store.setState(defaultState);
    shoesFacade = TestBed.get(ShoesFacade);
    fixture = TestBed.createComponent(ShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.form = formBuilder.group({
      id: null,
      title: '',
      details: '',
      coolLevel: null
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });

  // Tests for Functionality

  // 1: Select Shoe method Test
  describe('#selectShoe', () => {
    it('should set selected shoe', () => {
      jest.spyOn(shoesFacade, 'selectShoe');
      component.selectShoe(testObject);
      expect(shoesFacade.selectShoe).toHaveBeenCalledWith(testObject.id);
    });

    it('should patch form with selected shoe', () => {
      component.form.patchValue(testObject);
      expect(component.form.value).toEqual(testObject)
    });
  });

  // 2: Delete Shoe methoed Test
  describe('#deleteShoe', () => {
    it('should delete a shoe', () => {
      jest.spyOn(shoesFacade, 'deleteShoe');
      component.deleteShoe(testObject);
      expect(shoesFacade.deleteShoe).toHaveBeenCalledWith(testObject);
    });
  });

  // 3: Update Shoe
  describe('#update', () => {
    it('should update a shoe', () => {
      jest.spyOn(shoesFacade, 'updateShoe');
      component.form.patchValue(testObject);
      component.updateShoe();
      expect(shoesFacade.updateShoe).toHaveBeenCalledWith(testObject);
    });
  });

  // 4: Save Shoe
  describe('#create', () => {
    it('should create a shoe if no id', () => {
      jest.spyOn(shoesFacade, 'createShoe');
      component.saveShoe(emptyTestObject);
      expect(shoesFacade.createShoe).toHaveBeenCalled();
    });

    it('should update a shoe if an id', () => {
      jest.spyOn(shoesFacade, 'updateShoe');
      component.saveShoe(testObject);
      expect(shoesFacade.updateShoe).toHaveBeenCalled();
    });
  });

  // 5: Reset Shoe
  describe('#reset shoe', () => {
    it('should rest form', () => {
      component.form.patchValue({ id: 1 });
      component.resetShoes();
      expect(component.form.value.id).toEqual(null);
    });
  });


  // 6: ngOnInit
  describe('#ngOnInit', () => {
    it('should load all shoes', () => {
      component.ngOnInit();
      fixture.detectChanges();
      jest.spyOn(shoesFacade, 'loadShoes');
      expect(shoesFacade.loadShoes).toBeTruthy();
    });

    it('should reset form on create', () => {
      component.form.patchValue(testObject);
      component.createShoe();
      expect(component.form.value).toEqual(emptyTestObject);
    });

    it('should reset form on update', () => {
      component.form.patchValue(testObject);
      component.updateShoe();
      expect(component.form.value).toEqual(emptyTestObject);
    });
  });
});
