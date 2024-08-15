// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [itemCount, setItemCount] = useState(0);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//     setItemCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, itemCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.id === item.id && cartItem.quantity < 10
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      setTotalPrice(prevTotal => prevTotal + item.price);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      setTotalPrice(prevTotal => prevTotal + item.price);
    }
    setItemCount((prevCount) => prevCount + 1);
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        const newQuantity = item.quantity + quantity;
        if (item.id === itemId) {
          if (newQuantity > 10) return { ...item, quantity: 10 };
          if (newQuantity < 0) return { ...item, quantity: 0 };

          // Update total price
          setTotalPrice(prevTotal => prevTotal + item.price * quantity);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );

    // Adjust itemCount only if within valid range
    setItemCount(prevCount => {
      const updatedCount = prevCount + quantity;
      if (updatedCount < 0) return 0;
      if (updatedCount > 10) return 10;
      return updatedCount;
    });
  };

  const removeFromCart = (itemId) => {
    const itemToRemove = cartItems.find(item => item.id === itemId);
    if (itemToRemove) {
      setCartItems(prevItems =>
        prevItems.filter(item => item.id !== itemId)
      );
      setTotalPrice(prevTotal => prevTotal - (itemToRemove.price * itemToRemove.quantity));
      setItemCount(prevCount => prevCount - itemToRemove.quantity);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeFromCart, itemCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
