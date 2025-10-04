import ProductList from '../components/ProductList';
import { useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [search, setSearch] = useState('');
  const products = [/* product array */];

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductList products={filtered} />
    </>
  );
}

function Home() {
  const products = [
    { id: '1', title: 'Wireless Headphones', price: 59.99, image: '/images/headphones.jpg' },
    { id: '2', title: 'Smart Watch', price: 129.99, image: '/images/watch.jpg' },
    { id: '3', title: 'Gaming Mouse', price: 39.99, image: '/images/mouse.jpg' },
  ];

  return <ProductList products={products} />;
}

export default Home;

