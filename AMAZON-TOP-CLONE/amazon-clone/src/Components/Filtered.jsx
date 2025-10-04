const [category, setCategory] = useState('all');

const filtered = products.filter((p) =>
  (category === 'all' || p.category === category) &&
  p.title.toLowerCase().includes(search.toLowerCase())
);


<select onChange={(e) => setCategory(e.target.value)}>
  <option value="all">All</option>
  <option value="electronics">Electronics</option>
  <option value="fashion">Fashion</option>
</select>
