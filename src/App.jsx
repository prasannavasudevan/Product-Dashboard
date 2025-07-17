// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductDetail from './features/products/ProductDetails';
import FavoritesPage from './features/favorites/FavoritePage';

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-2xl font-bold text-center mt-4">Product Dashboard</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
