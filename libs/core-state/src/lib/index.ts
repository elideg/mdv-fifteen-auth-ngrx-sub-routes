import { ActionReducerMap } from '@ngrx/store';

import * as fromShoes from './shoes/shoes.reducer';

export interface AppState {
  shoes: fromShoes.ShoesState;
}

export const reducers: ActionReducerMap<AppState> = {
  shoes: fromShoes.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
