import { createContext, useEffect, useState } from "react";

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

const removeItemFromCart = (cartItems, product) => {
  const removeProduct = cartItems.find((item) => item.id === product.id);
  if (removeProduct.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  } else {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

const clearItemFromCart = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

const handleTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalItems(
      cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
      }, 0)
    );
    setTotalPrice(
      cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
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

  const removeItem = (product) => {
    setCardItems(removeItemFromCart(cartItems, product));
  };

  const deleteItemFromCart = (cartItem) => {
    setCardItems(clearItemFromCart(cartItems, cartItem));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItem,
    cartItems,
    totalItems,
    removeItem,
    deleteItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
