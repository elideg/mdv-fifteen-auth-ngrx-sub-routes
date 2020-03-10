import { ShoeService, NotifyService } from '@mdv-fifteen/core-data';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { Observable, of, throwError } from 'rxjs';

import { DataPersistence } from '@nrwl/angular';

import { Actions } from '@ngrx/effects';
import { TestBed, async } from '@angular/core/testing';
import { ShoesEffects } from './shoes.effects';
import { Shoe } from '@mdv-fifteen/core-data';
import * as ShoesActions from './shoes.actions';
import {
  mockError,
  mockShoes
} from './shoes.mocks';

describe('ShoesEffects', () => {
  let actions$: Observable<any>;
  let effects: ShoesEffects;
  let dataPersistence: DataPersistence<any>;
  let shoeService: ShoeService;
  let notify: NotifyService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        ShoesEffects,
        DataPersistence,
        {
          provide: ShoeService,
          useValue: {
            all: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
          }
        },
        {
          provide: NotifyService,
          useValue: {
            notification: jest.fn()
          }
        },
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.get(ShoesEffects);
    shoeService = TestBed.get(ShoeService);
    notify = TestBed.get(NotifyService);
    dataPersistence = TestBed.get(DataPersistence);
  });

  describe('#loadShoes', () => {
    it('should load shoes', (done) => {
      actions$ = of(ShoesActions.loadShoes());
      jest.spyOn(shoeService, 'all').mockReturnValueOnce(of(mockShoes))

      effects.loadShoes$.subscribe(dispatchedAction => {
        expect(shoeService.all).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(ShoesActions.shoesLoaded({ shoes: mockShoes }));
        done();
      });
    });

    it('should disbatch the loadShoesError action', (done) => {
      actions$ = of(ShoesActions.loadShoes());
      jest.spyOn(shoeService, 'all').mockReturnValueOnce(throwError(mockError));

      effects.loadShoes$.subscribe(dispatchedAction => {
        expect(dispatchedAction).toEqual(ShoesActions.loadShoesError({ error: mockError }));
        done();
      })
    })
  });

  describe('#addShoe', () => {
    it('should add a shoe', (done) => {
      actions$ = of(ShoesActions.createShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'create').mockReturnValueOnce(of(mockShoes))

      effects.addShoe$.subscribe(dispatchedAction => {
        expect(shoeService.create).toHaveBeenCalled();
        expect(notify.notification).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(ShoesActions.shoeCreated({ shoe: mockShoes }));
        done();
      })
    });

    it('should dispatch createShoeError action', (done) => {
      actions$ = of(ShoesActions.createShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'create').mockReturnValueOnce(throwError(mockError));

      effects.addShoe$.subscribe(dispatchedAction => {
        expect(dispatchedAction).toEqual(ShoesActions.createShoeError({ error: mockError }));
        done();
      })
    });
  });

  describe('#updateShoe', () => {
    it('should update a shoe', (done) => {
      actions$ = of(ShoesActions.updateShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'update').mockReturnValueOnce(of(mockShoes));

      effects.updateShoe$.subscribe(dispatchedAction => {
        expect(shoeService.update).toHaveBeenCalled();
        expect(notify.notification).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(ShoesActions.shoeUpdated({ shoe: mockShoes }));
        done();
      })
    });

    it('should dispatch updateShoeError action', (done) => {
      actions$ = of(ShoesActions.updateShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'update').mockReturnValueOnce(throwError(mockError));

      effects.updateShoe$.subscribe(dispatchedAction => {
        expect(dispatchedAction).toEqual(ShoesActions.updateShoeError({ error: mockError }));
        done();
      })
    });
  });

  describe('#deleteShoe', () => {
    it('should delete a shoe', (done) => {
      actions$ = of(ShoesActions.deleteShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'delete').mockReturnValueOnce(of(mockShoes));

      effects.deleteShoe$.subscribe(dispatchedAction => {
        expect(shoeService.delete).toHaveBeenCalled();
        expect(notify.notification).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(ShoesActions.shoeDeleted({ shoe: mockShoes }));
        done();
      })
    });

    it('should dispatch deleteShoeError action', (done) => {
      actions$ = of(ShoesActions.deleteShoe({ shoe: mockShoes }));
      jest.spyOn(shoeService, 'delete').mockReturnValueOnce(throwError(mockError));

      effects.deleteShoe$.subscribe(dispatchedAction => {
        expect(dispatchedAction).toEqual(ShoesActions.deleteShoeError({ error: mockError }))
        done();
      })
    });
  });
})