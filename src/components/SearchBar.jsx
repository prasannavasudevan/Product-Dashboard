import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/filters/filtersSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(setSearchQuery(input));
    }, 500); // 500ms debounce

    return () => clearTimeout(debounce);
  }, [input, dispatch]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search products..."
      className="p-2 border rounded w-full max-w-md mb-4"
    />
  );
};

export default SearchBar;
