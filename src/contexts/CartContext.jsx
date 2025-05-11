import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [ cartItems, setCartItems ] = useState([])
  
  function addToCart(product, quantity) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.product.id === product.id);

      if(existingItem) {
        return prevItems.map(prevItem =>
          prevItem.product.id === product.id 
          ? { ...prevItem, quantity: quantity }
          : prevItem
        );
      } else {
        return [...prevItems, { product, quantity }] 
      }
    })
  }

  function incrementQuantity(product) {
    setCartItems((prevItems) =>
      prevItems.map((item) => 
        item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      )
    );
  }
  
  function decrementQuantity(product) {
    setCartItems((prevItems) =>
      prevItems.map((item) => 
        item.product.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
      ).filter(item => item.quantity > 0)
    );
  }

  function removeFromCart(product) {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.product.id !== product.id)
    )
  }

  function cartTotal() {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  return(
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      incrementQuantity,
      decrementQuantity,
      removeFromCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}