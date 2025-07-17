import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
