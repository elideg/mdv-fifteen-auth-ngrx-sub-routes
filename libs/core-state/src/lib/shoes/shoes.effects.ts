import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

import {
  updateShoe,
  shoeUpdated,
  updateShoeError,
  loadShoes,
  loadShoesError,
  shoesLoaded,
  deleteShoe,
  deleteShoeError,
  shoeDeleted,
  createShoe,
  createShoeError,
  shoeCreated
} from './shoes.actions';
import { Shoe, ShoeService, NotifyService } from '@mdv-fifteen/core-data';
import { ShoesPartialState } from './shoes.reducer';

@Injectable()
export class ShoesEffects {

  loadShoes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShoes),
      switchMap(() => this.shoesService.all().pipe(
        map((shoes: Shoe[]) => shoesLoaded({ shoes })),
        catchError(error => of(loadShoesError({ error })))
      ))
    )
  );

  addShoe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createShoe),
      switchMap(action => this.shoesService.create(action.shoe).pipe(
        map((shoe: Shoe) => shoeCreated({ shoe })),
        tap(() => this.notify.notification('Succesfully Added a Shoe')),
        catchError(error => of(createShoeError({ error })))
      ))
    )
  );

  updateShoe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateShoe),
      switchMap(action => this.shoesService.update(action.shoe).pipe(
        map((shoe: Shoe) => shoeUpdated({ shoe })),
        tap(() => this.notify.notification('Succesfully Updated a Shoe')),
        catchError(error => of(updateShoeError({ error })))
      ))
    )
  );

  deleteShoe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteShoe),
      switchMap(action => this.shoesService.delete(action.shoe).pipe(
        map((shoe: Shoe) => shoeDeleted({ shoe })),
        tap(() => this.notify.notification('Successfully Deleted a Shoe')),
        catchError(error => of(deleteShoeError({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ShoesPartialState>,
    private shoesService: ShoeService,
    private notify: NotifyService
  ) {}
}
