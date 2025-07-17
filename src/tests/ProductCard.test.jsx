/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorites/favoriteSlice';
import { BrowserRouter } from 'react-router-dom';

const sampleProduct = {
  id: 1,
  title: 'Unit Test Product',
  price: 42,
  image: 'https://via.placeholder.com/150',
};

function renderWithFavorites(initialItems) {
  const store = configureStore({
    reducer: { favorites: favoriteReducer },
    preloadedState: { favorites: { items: initialItems } },
  });
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductCard product={sampleProduct} />
      </BrowserRouter>
    </Provider>
  );
}

describe('ProductCard unit tests', () => {
  test('shows "🤍 Favorite" when product is not in favorites', () => {
    renderWithFavorites([]);
    expect(screen.getByText('🤍 Favorite')).toBeInTheDocument();
  });

  test('shows "❤️ Remove" when product is already in favorites', () => {
    renderWithFavorites([sampleProduct]);
    expect(screen.getByText('❤️ Remove')).toBeInTheDocument();
  });
});
