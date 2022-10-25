import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectTotalItems,
} from "../../store/cart/cart.selector";
import {
  CartIconContainer,
  ItemCount,
  ShoppingCartIcon,
} from "./card-icon.styles";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const isCartOpen = useSelector(selectIsCartOpen);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();

  const toggleIssCartOpen = () => {
    dispatch(toggleIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIssCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
