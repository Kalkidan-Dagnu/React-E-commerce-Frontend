import { createContext, useReducer } from "react";
import { CreateAction } from "../utils/dispatch-action.utils";

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
  TOGGLE_CART_IS_OPEN: "TOGGLE_CART_IS_OPEN",
  GET_TOTAL_ITEMS: "GET_TOTAL_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in Cart Context!`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCardItems] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const [{ isCartOpen, cartItems, totalItems, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (isCartOpen) => {
    dispatch(CreateAction(CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN, isCartOpen));
  };

  const updateCartItems = (newCartItems) => {
    const newTotalItems = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newTotalPrice = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    dispatch(
      CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      })
    );
  };

  // useEffect(() => {
  //   setTotalItems(
  //     cartItems.reduce((total, cartItem) => {
  //       return total + cartItem.quantity;
  //     }, 0)
  //   );
  // setTotalPrice(
  //   cartItems.reduce((total, cartItem) => {
  //     return total + cartItem.quantity * cartItem.price;
  //   }, 0)
  // );
  // }, [cartItems]);

  const addItem = (productToAdd) => {
    const newCartItems = addItemToCart(cartItems, productToAdd);
    updateCartItems(newCartItems);
    // setTotalItems(
    //   items.reduce((total, item) => {
    //     return total + item.quantity;
    //   }, 0)
    // );
  };

  const removeItem = (product) => {
    const newCartItems = removeItemFromCart(cartItems, product);
    updateCartItems(newCartItems);
  };

  const deleteItemFromCart = (cartItem) => {
    const newCartItems = clearItemFromCart(cartItems, cartItem);
    updateCartItems(newCartItems);
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
