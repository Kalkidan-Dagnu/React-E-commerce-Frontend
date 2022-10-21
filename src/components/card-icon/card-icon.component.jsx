import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingCartIcon,
} from "./card-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const toggleIssCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIssCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
