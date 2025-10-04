import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const { dispatch } = useCart();

  // Simulated product data (replace with real fetch later)
  const product = {
    id,
    title: 'Wireless Headphones',
    price: 59.99,
    description: 'High-quality sound with noise cancellation.',
    image: '/images/headphones.jpg',
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => dispatch({ type: 'ADD', product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
