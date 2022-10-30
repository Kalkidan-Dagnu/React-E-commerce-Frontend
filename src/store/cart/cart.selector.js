import { createSelector } from "reselect";


const selectCartReducer = (state) =>  state.cart;


export const selectIsCartOpen = createSelector(
    selectCartReducer,
    (cart) => cart.isCartOpen
  );


export const selectCartItems = createSelector(
    selectCartReducer, 
    (cartItemsSlice) => cartItemsSlice.cartItems
)

export const selectTotalItems = createSelector(
  [selectCartItems], (cartItems) =>
cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);


export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
)
);


