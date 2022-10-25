import { createSelector } from "reselect";


const selectCartReducer = (state) => {
    console.log(state)
    return state.cart;
};

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
  );

export const selectCartItems = createSelector(
    [selectCartReducer], 
    (cartItemsSlice) => cartItemsSlice.cartItems
)

export const selectTotalItems = createSelector(
    [selectCartReducer],
    (cartItems) => (cartItems.length && cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
      }, 0)) || 0)

export const selectTotalPrice = createSelector(
    [selectCartReducer],
     (cartItems) => (cartItems.length && cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
      }, 0) || 0 )
  )


