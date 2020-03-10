import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromShoes from './shoes.reducer';
import * as shoesActions from './shoes.actions';
import * as shoesSelectors from './shoes.selectors';
import { Shoe } from '@mdv-fifteen/core-data';

@Injectable({
  providedIn: 'root'
})
export class ShoesFacade {
  allShoes$ = this.store.pipe(select(shoesSelectors.selectAllShoes));
  selectedShoe$ = this.store.pipe(select(shoesSelectors.selectShoe));
  shoeLoading$ = this.store.pipe(select(shoesSelectors.selectShoesLoading));

  constructor(private store: Store<fromShoes.ShoesPartialState>) {}

  selectShoe(selectedShoeId: number) {
    this.store.dispatch(shoesActions.shoeSelected({ selectedShoeId }));
  }

  loadShoes() {
    this.store.dispatch(shoesActions.loadShoes());
  }

  createShoe(shoe: Shoe) {
    this.store.dispatch(shoesActions.createShoe({ shoe }));
  }

  updateShoe(shoe: Shoe) {
    this.store.dispatch(shoesActions.updateShoe({ shoe }));
  }

  deleteShoe(shoe: Shoe) {
    this.store.dispatch(shoesActions.deleteShoe({ shoe }));
  }
}
