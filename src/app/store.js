import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import favoriteReducer from '../features/favorites/favoriteSlice';
import filtersReducer from '../features/filters/filtersSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoriteReducer,
    filters: filtersReducer,
  },
});

export default store;
