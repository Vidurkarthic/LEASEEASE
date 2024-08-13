// // CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
//     if (existingItemIndex !== -1) {
//       const updatedCart = cart.map((cartItem, index) => {
//         if (index === existingItemIndex) {
//           return { ...cartItem, qty: cartItem.qty + 1 };
//         }
//         return cartItem;
//       });
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   const removeFromCart = (item) => {
//     const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
//     if (existingItemIndex !== -1 && cart[existingItemIndex].qty > 1) {
//       const updatedCart = cart.map((cartItem, index) => {
//         if (index === existingItemIndex) {
//           return { ...cartItem, qty: cartItem.qty - 1 };
//         }
//         return cartItem;
//       });
//       setCart(updatedCart);
//     } else {
//       const updatedCart = cart.filter((cartItem) => cartItem.title !== item.title);
//       setCart(updatedCart);
//     }
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.qty, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (existingItemIndex !== -1 && cart[existingItemIndex].qty > 1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((cartItem) => cartItem.title !== item.title);
      setCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
