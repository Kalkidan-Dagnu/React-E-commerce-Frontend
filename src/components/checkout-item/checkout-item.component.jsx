import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  deleteItemFromCart,
  addItem,
  removeItem,
} from "./../../store/cart/cart.action";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = item;
  // const { deleteItemFromCart } = useContext(CartContext);
  // const { addItem, removeItem } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const handleItemDeleteFromCart = (cartItem) => {
    dispatch(deleteItemFromCart(cartItems, cartItem));
  };

  const handleAddItem = () => {
    dispatch(addItem(cartItems, item));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(cartItems, item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={() => handleItemDeleteFromCart(item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
