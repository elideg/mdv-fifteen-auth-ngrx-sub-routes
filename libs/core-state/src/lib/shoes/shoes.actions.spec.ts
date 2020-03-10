import * as ShoesActions from './shoes.actions';
import { Shoe } from '@mdv-fifteen/core-data';
import {
  mockShoe
} from './shoes.mocks';

describe('Load Actions', () => {
  it('should load shoes', () => {
    const action = ShoesActions.loadShoes();
    const expected = {
      type: '[SHOE] Load Shoes'
    };
    expect(action).toEqual(expected);
  });

  it('shoes should be loaded', () => {
    const action = ShoesActions.shoesLoaded({ shoes: [mockShoe] });
    const expected = {
      type: '[SHOE] Shoes Loaded',
      shoes: [mockShoe]
    }
    expect(action).toEqual(expected);
  });
});

describe('Create Actions', () => {
  it('should create shoe', () => {
    const action = ShoesActions.createShoe({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Create Shoe',
      shoe: mockShoe
    };
    expect(action).toEqual(expected);
  });

  it('shoe should be created ', () => {
    const action = ShoesActions.shoeCreated({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Shoe Created',
      shoe: mockShoe
    }
    expect(action).toEqual(expected);
  });
});

describe('Update Actions', () => {
  it('should update shoe', () => {
    const action = ShoesActions.updateShoe({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Update Shoe',
      shoe: mockShoe
    }
    expect(action).toEqual(expected)
  });

  it('shoe should be updated', () => {
    const action = ShoesActions.shoeUpdated({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Shoe Updated',
      shoe: mockShoe
    }
    expect(action).toEqual(expected)
  });

});

describe('Delete Actions', () => {
  it('should delete shoe', () => {
    const action = ShoesActions.deleteShoe({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Delete Shoe',
      shoe: mockShoe
    }
    expect(action).toEqual(expected)
  });

  it('shoe should be deleted', () => {
    const action = ShoesActions.shoeDeleted({ shoe: mockShoe });
    const expected = {
      type: '[SHOE] Shoe Deleted',
      shoe: mockShoe
    }
    expect(action).toEqual(expected)
  });
});


