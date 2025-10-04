import { useState } from 'react';

function Filtered({ products, onFilter }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const handleFilter = () => {
    const filtered = products.filter((p) =>
      (category === 'all' || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    onFilter(filtered);
  };

  return (
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilter();
        }}
      />
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleFilter();
        }}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
      </select>
    </div>
  );
}

export default Filtered;
