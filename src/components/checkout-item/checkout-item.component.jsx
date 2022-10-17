import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { deleteItemFromCart } = useContext(CartContext);
  const { addItem, removeItem } = useContext(CartContext);

  const handleItemDeleteFromCart = (cartItem) => deleteItemFromCart(cartItem);

  const handleAddItem = () => addItem(item);
  const handleRemoveItem = () => removeItem(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItem}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => handleItemDeleteFromCart(item)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
