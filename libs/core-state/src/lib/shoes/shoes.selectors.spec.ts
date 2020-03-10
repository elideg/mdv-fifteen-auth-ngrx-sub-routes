import * as shoesSelectors from './shoes.selectors';
import {
	initialState
} from './shoes.reducer';
import {
	mockEntities, mockShoe
} from './shoes.mocks';

describe('ShoesSelectors', () => {
let state;

beforeEach(() => {
	state = { shoes: {
		ids: [],
		entities: {},
		...initialState
	}}
})

  it('selectShoes loading', () => {
		state.shoes.isLoading = true;
		expect(shoesSelectors.selectShoesLoading(state)).toBeTruthy();
	})
	
	it('should select entites', () => {
		state.shoes.entities = { 1: {}};
		expect(shoesSelectors.selectShoesEntities(state)).toEqual(mockEntities);
	})

	it('should select all shoes', () => {
		state.shoes.ids = [ 1 ];
		state.shoes.entities = { 1: { id: 1}};
		const expectedResponse = [{ id: 1 }];
		expect(shoesSelectors.selectAllShoes(state)).toEqual(expectedResponse);
	})

	it('should select shoe by id', () => {
		state.shoes.selectedShoeId = 1
		expect(shoesSelectors.selectShoeId(state)).toEqual(1);
	})

	it('shoud select a shoe', () => {
		state.shoes.entities = { 1: { id: 1 }};
		state.shoes.selectedShoeId = 1;
		expect(shoesSelectors.selectShoe(state)).toEqual({ id: 1 });
	})
})