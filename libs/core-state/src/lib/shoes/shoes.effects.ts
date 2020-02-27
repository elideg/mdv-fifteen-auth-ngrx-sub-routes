import { ShoesFacade } from './shoes.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as shoesActions from './shoes.actions';
import { Shoe, ShoeService, NotifyService } from '@mdv-fifteen/core-data';
import { ShoesPartialState } from './shoes.reducer';

@Injectable()
export class ShoesEffects {
  loadShoes$ = createEffect(() =>
    this.dataPersistence.fetch(shoesActions.loadShoes, {
      run: (
        action: ReturnType<typeof shoesActions.loadShoes>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.all().pipe(
          map((shoes: Shoe[]) => shoesActions.shoesLoaded({ shoes }))
        );
      },
      onError: (action: ReturnType<typeof shoesActions.loadShoes>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.createShoe, {
      run: (
        action: ReturnType<typeof shoesActions.createShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.create(action.shoe).pipe(
          map((shoe: Shoe) => shoesActions.shoeCreated({ shoe })),
          tap(() => this.notify.notification('Successfully Added a Shoe'))
        );
      },
      onError: (action: ReturnType<typeof shoesActions.createShoe>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.updateShoe, {
      run: (
        action: ReturnType<typeof shoesActions.updateShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.update(action.shoe).pipe(
          map((shoe: Shoe) => shoesActions.shoeUpdated({ shoe })),
          tap(() => this.notify.notification('Successfully Updated a Shoe'))
        );
      },
      onError: (action: ReturnType<typeof shoesActions.updateShoe>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteShoe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(shoesActions.deleteShoe, {
      run: (
        action: ReturnType<typeof shoesActions.deleteShoe>,
        state: ShoesPartialState
      ) => {
        return this.shoesService.delete(action.shoe).pipe(
          tap((res) => console.log(res)),
          map((shoe: Shoe) => shoesActions.shoeDeleted({ shoe })),
          tap(() => this.notify.notification('Successfully Deleted a Shoe')),
          tap(() => this.shoesFacade.loadShoes())
        );
      },
      onError: (action: ReturnType<typeof shoesActions.deleteShoe>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ShoesPartialState>,
    private shoesService: ShoeService,
    private shoesFacade: ShoesFacade,
    private notify: NotifyService
  ) {}
}
