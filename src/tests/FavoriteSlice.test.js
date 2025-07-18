/* eslint-disable no-undef */
// favoriteSlice.test.js
import favoriteReducer, {
  addToFavorites,
  removeFromFavorites,
} from '../features/favorites/favoriteSlice';

describe('favoriteSlice', () => {
  const initialState = {
    items: [],
  };

  const sampleProduct = {
    id: 1,
    title: 'Sample Product',
    price: 99.99,
  };

  it('should return the initial state', () => {
    expect(favoriteReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle addToFavorites', () => {
    const state = favoriteReducer(initialState, addToFavorites(sampleProduct));
    expect(state.items).toContainEqual(sampleProduct);
  });

  it('should not add duplicate items to favorites', () => {
    const stateWithProduct = {
      items: [sampleProduct],
    };
    const state = favoriteReducer(stateWithProduct, addToFavorites(sampleProduct));
    expect(state.items.length).toBe(1);
  });

  it('should handle removeFromFavorites', () => {
    const stateWithProduct = {
      items: [sampleProduct],
    };
    const state = favoriteReducer(stateWithProduct, removeFromFavorites(sampleProduct.id));
    expect(state.items).toEqual([]);
  });
});
