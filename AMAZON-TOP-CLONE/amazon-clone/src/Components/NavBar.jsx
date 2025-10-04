import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default NavBar;
