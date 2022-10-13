import { createContext, useContext, useEffect, useState } from "react";

const addItemToCart = (cartItems, product) => {
  /**
   *
   * FIND THE PRODUCT EXISTS ON THE CART
   * IF (EXISTS) -> ADD QUANTITY BY ONE
   * IF(NOT) -> ADD QUANTITY BY ONE AND PRODUCT
   *  name,price,id,quantity
   */
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
  setTotalItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(
      cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
      }, 0)
    );
  }, [cartItems]);

  const addItem = (productToAdd) => {
    setCardItems(addItemToCart(cartItems, productToAdd));
    // setTotalItems(
    //   items.reduce((total, item) => {
    //     return total + item.quantity;
    //   }, 0)
    // );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItem,
    cartItems,
    totalItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
