import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items yet!</p> : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price.toFixed(2)}
                <button onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => {
            alert('Checkout complete!');
            dispatch({ type: 'CLEAR' });
          }}>Checkout</button>
        </>
      )}
    </div>
  );
}









