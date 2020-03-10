import { shoesReducer, initialState } from './shoes.reducer';
import * as ShoesActions from './shoes.actions';
import {
  mockError,
  mockShoes,
  mockShoe
} from './shoes.mocks';
import { ShoesFacade } from './shoes.facade';

describe('ShoesReducer', () => {

  describe('Load Shoes', () => {
    it('should return entities and ids when success action is passed', () => {
      const mockResponse = { ...initialState, entities: { 2: {id: 2}}, ids: [2] };
      expect(shoesReducer(initialState, ShoesActions.shoesLoaded({ shoes: mockShoes }))).toEqual(mockResponse);
    })

    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(shoesReducer(initialState, ShoesActions.loadShoes())).toEqual(mockResponse);
    })

    it('should return load shoes error', () => {
      const mockResponse = { ...initialState, error: 'error' };
      expect(shoesReducer(initialState, ShoesActions.loadShoesError({ error: mockError }))).toEqual(mockResponse);
    })
  });
  
  describe('Select Shoe', () => {
    it('should select shoe by passed id', () => {
      const mockResponse = { ...initialState, selectedShoeId: 1 };
      expect(shoesReducer(initialState, ShoesActions.shoeSelected({ selectedShoeId: 1 }))).toEqual(mockResponse);
    })

  })
  
  describe('shoeCreated', () => {
    it('should return entities and ids when shoeCreated is passed', () => {
      const mockResponse = { ...initialState, entities: { 1: mockShoe }, ids: [1] };
      expect(shoesReducer(initialState, ShoesActions.shoeCreated({ shoe: mockShoe }))).toEqual(mockResponse);
    })


    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(shoesReducer(initialState, ShoesActions.createShoe({ shoe: mockShoe }))).toEqual(mockResponse);
    })
  })

  describe('shoeUpdated', () => {
    it('should return entities and ids when shoeUpdated is passed', () => {
      const mockResponse = { ...initialState, entities: { 1: { ...mockShoe }}, ids: [1] };
      expect(shoesReducer(initialState, ShoesActions.shoeUpdated({ shoe: mockShoe }))).toEqual(mockResponse);
    })

    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(shoesReducer(initialState, ShoesActions.updateShoe({ shoe: mockShoe }))).toEqual(mockResponse);
    })
  })

  describe('shoeDeleted', () => {
    it('should return entities and ids when shoeUpdated is passed', () => {
      const mockResponse = { ...initialState, entities: { 1: { ...mockShoe }}, ids: [1] };
      expect(shoesReducer(initialState, ShoesActions.shoeUpdated({ shoe: mockShoe }))).toEqual(mockResponse);
    })

    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(shoesReducer(initialState, ShoesActions.deleteShoe({ shoe: mockShoe }))).toEqual(mockResponse);
    })
  })

});