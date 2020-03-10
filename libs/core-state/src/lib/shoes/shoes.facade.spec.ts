import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { ShoesFacade } from './shoes.facade';
import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import * as ShoesActions from './shoes.actions';
import * as shoesSelectors from './shoes.selectors';
import {
  mockShoes,
  mockSelectedShoeId
} from './shoes.mocks';

describe('ShoesFacade', () => {
  let actions$: Observable<any>;
  let facade: ShoesFacade;
  let store: MockStore<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ShoesFacade,
        MockStore,
        provideMockStore(),
        provideMockActions(() => actions$)
      ]
    })
  });

  beforeEach(() => {
    facade = TestBed.get(ShoesFacade);
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
  });


  describe('#loadShoe', () => {
    it('should dispatch loadShoes action', () => {
      facade.loadShoes();

      expect(store.dispatch).toHaveBeenCalledWith(ShoesActions.loadShoes());
    });
  });

  describe('#selectShoe', () => {
    it('should dispatch shoeSelected action', () => {
      facade.selectShoe(mockSelectedShoeId);

      expect(store.dispatch).toHaveBeenCalledWith(ShoesActions.shoeSelected({ selectedShoeId: mockSelectedShoeId }));
    });
  });

  describe('#createShoe', () => {
    it('should dispatch createShoe action', () => {
      facade.createShoe(mockShoes);

      expect(store.dispatch).toHaveBeenCalledWith(ShoesActions.createShoe({ shoe: mockShoes }));
    });
  });

  describe('#deleteShoe', () => {
    it('should dispatch deleteShoe action', () => {
      facade.deleteShoe(mockShoes);

      expect(store.dispatch).toHaveBeenCalledWith(ShoesActions.deleteShoe({ shoe: mockShoes }));
    });
  });

  describe('#updateShoe', () => {
    it('should dispatch updateShoe action', () => {
      facade.updateShoe(mockShoes);

      expect(store.dispatch).toHaveBeenCalledWith(ShoesActions.updateShoe({ shoe: mockShoes }));
    });
  });

  describe('#allShoes$', () => {
    it('should return an observable of shoes', (done) => {
      store.overrideSelector(shoesSelectors.selectAllShoes, mockShoes);

      facade.allShoes$.subscribe(observableStream => {
        expect(observableStream).toEqual(mockShoes);
        done();
      })
    });
  });

  describe('#selectedShoe$', () => {
    it('should return observable with selected shoe', (done) => {
      store.overrideSelector(shoesSelectors.selectShoe, mockShoes);

      facade.selectedShoe$.subscribe(observableStream => {
        expect(observableStream).toEqual(mockShoes);
        done();
      })
    });
  });

  describe('#shoeLoading$', () => {
    it('should return an observable with loading status', (done) => {
      store.overrideSelector(shoesSelectors.selectShoesLoading, false);

      facade.shoeLoading$.subscribe(observableStream => {
        console.log(observableStream);
        expect(observableStream).toEqual(false);
        done();
      })
    });
  });
});
