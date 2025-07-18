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

describe('ProductCard icon-based favorite button', () => {
  test('shows "Add to favorites" aria-label when not in favorites', () => {
    renderWithFavorites([]);
    expect(
      screen.getByRole('button', { name: /add to favorites/i })
    ).toBeInTheDocument();
  });

  test('shows "Remove from favorites" aria-label when in favorites', () => {
    renderWithFavorites([sampleProduct]);
    expect(
      screen.getByRole('button', { name: /remove from favorites/i })
    ).toBeInTheDocument();
  });
});
