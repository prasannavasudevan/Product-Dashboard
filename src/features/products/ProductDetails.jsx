import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return <div className="text-center mt-10 text-xl">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain bg-gray-50 p-4 rounded"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-green-600 font-semibold text-xl mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
