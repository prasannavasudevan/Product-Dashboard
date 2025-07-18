import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../favorites/favoriteSlice';
import FavButton from '../../components/FavButton';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const favorites = useSelector((state) => state.favorites.items);
  const isFav = favorites.some((item) => item.id === product?.id);

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mt-4">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow rounded-lg p-6">
        <div className="relative w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain bg-gray-50 p-4 rounded"
          />
          <div className="absolute top-3 right-3 z-10">
            <FavButton isFav={isFav} onToggle={handleFavorite} />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-xl text-green-600 font-bold mb-4">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
