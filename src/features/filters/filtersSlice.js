import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
  searchQuery: '',
  sortOrder: 'default', 
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortOrder: (state, action) => { 
      state.sortOrder = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setSearchQuery, setSortOrder, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
