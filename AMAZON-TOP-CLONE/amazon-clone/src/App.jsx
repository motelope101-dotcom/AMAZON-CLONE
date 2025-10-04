import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './styles/App.css';
import { CartProvider } from './context/CartContext';
import Filtered from './components/Filtered'

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        {/* Header, NavBar, Routes */}
      </div>
    </CartProvider>
  );
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
