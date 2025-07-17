import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.items); // ✅ items inside 'favorites'

  if (!favorites.length) {
    return <p className="text-center text-gray-500 mt-10">No favorites yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {favorites.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FavoritesPage;
