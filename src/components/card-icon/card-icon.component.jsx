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
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const totalItems = useSelector(selectTotalItems);

  const handleToggleIsCartOpen = () => dispatch(toggleIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={handleToggleIsCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
