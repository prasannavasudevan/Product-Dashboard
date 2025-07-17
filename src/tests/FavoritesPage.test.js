/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FavoritesPage from '../features/favorites/FavoritePage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorites/favoriteSlice';
import { BrowserRouter } from 'react-router-dom';

describe('FavoritesPage integration tests', () => {
  const sampleProduct = {
    id: 1,
    title: 'Integration Test Product',
    price: 100,
    image: 'https://via.placeholder.com/150',
  };

  const renderWithFavorites = (items) => {
    const store = configureStore({
      reducer: { favorites: favoriteReducer },
      preloadedState: { favorites: { items } },
    });
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <FavoritesPage />
        </BrowserRouter>
      </Provider>
    );
  };

  test('renders fallback when no favorites', () => {
    renderWithFavorites([]);
    expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
  });

  test('renders favorite products when they exist', () => {
    renderWithFavorites([sampleProduct]);
    expect(screen.getByText('Integration Test Product')).toBeInTheDocument();
  });
});
