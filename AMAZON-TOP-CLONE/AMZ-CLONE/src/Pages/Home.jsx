import { useState } from 'react';
import ProductList from '../components/ProductList';
import Filtered from '../components/Filtered';

function Home() {
  const products = [
    { id: '1', title: 'Wireless Headphones', price: 59.99, image: '/images/headphones.jpg', category: 'electronics' },
    { id: '2', title: 'Smart Watch', price: 129.99, image: '/images/watch.jpg', category: 'electronics' },
    { id: '3', title: 'Leather Jacket', price: 89.99, image: '/images/jacket.jpg', category: 'fashion' },
    { id: '4', title: 'Sci-Fi Novel', price: 19.99, image: '/images/book.jpg', category: 'books' },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <Filtered products={products} onFilter={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default Home;
