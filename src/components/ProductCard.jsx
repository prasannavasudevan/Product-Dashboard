
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favorites/favoriteSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFav = favorites.some((item) => item.id === product.id);

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
        <div className="p-4">
          <h2 className="text-md font-semibold truncate">{product.title}</h2>
          <p className="text-lg font-bold text-green-600 mt-1">${product.price}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={handleFavorite}
          className={`mt-2 px-4 py-1 text-sm rounded-full ${
            isFav ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {isFav ? '❤️ Remove' : '🤍 Favorite'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
