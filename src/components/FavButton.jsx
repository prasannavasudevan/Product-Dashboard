import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const FavButton = ({ isFav, onToggle }) => {
  return (
    <button
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      className={`p-2 rounded-full transition-all duration-300 shadow-md ${
        isFav ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {isFav ? (
        <FaHeart className="text-lg hover:scale-110 transition-transform duration-300" />
      ) : (
        <FiHeart className="text-lg hover:scale-110 transition-transform duration-300" />
      )}
    </button>
  );
};

export default FavButton;
