import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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
  const { imageUrl, name, quantity, price } = item;
  const { deleteItemFromCart } = useContext(CartContext);
  const { addItem, removeItem } = useContext(CartContext);

  const handleItemDeleteFromCart = (cartItem) => deleteItemFromCart(cartItem);

  const handleAddItem = () => addItem(item);
  const handleRemoveItem = () => removeItem(item);

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
