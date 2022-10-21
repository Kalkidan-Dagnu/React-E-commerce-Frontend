import {
  CartItemContainer,
  ItemDetails,
  ItemImage,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} X {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
