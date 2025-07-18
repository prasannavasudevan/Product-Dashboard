// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductDetail from './features/products/ProductDetails';
import FavoritesPage from './features/favorites/FavoritePage';
import Headers from './components/Headers'

function App() {
  
  return (
    <Router>
      <div>
        <Headers />
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
