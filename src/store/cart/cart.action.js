import { CreateAction } from "../../utils/dispatch-action.utils"
import { CART_ACTION_TYPES } from "./cart-action.types"


export const toggleIsCartOpen = (boolean) =>  CreateAction(CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN,boolean)

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
export const addItem = (cartItems,productToAdd) => {
    const newCartItems = addItemToCart(cartItems, productToAdd);
    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
  };

export const removeItem = (cartItems,product) => {
    const newCartItems = removeItemFromCart(cartItems, product);
    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

export const deleteItemFromCart = (cartItems,cartItem) => {
    const newCartItems = clearItemFromCart(cartItems, cartItem);
   return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
  };