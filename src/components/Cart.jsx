// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, calculateTotal, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ backgroundColor: '#435585', color: 'white', padding: '20px' }}>
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price} x {item.qty}
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${calculateTotal()}</h4>
    </div>
  );
};

export default Cart;
