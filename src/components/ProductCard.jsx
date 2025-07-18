import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favorites/favoriteSlice';
import { Link } from 'react-router-dom';
import FavButton from './FavButton';

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
    <div className="relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
        <div className="p-4">
          <h2 className="text-md font-semibold truncate">{product.title}</h2>
          <p className="text-lg font-bold text-green-600 mt-1">${product.price}</p>
        </div>

        <div className="absolute bottom-3 right-3">
          <FavButton isFav={isFav} onToggle={handleFavorite} />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
