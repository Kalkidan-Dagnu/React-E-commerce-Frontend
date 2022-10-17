import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {cartItems.length === 0 ? (
        <div className="empty-message">Your cart is empty.</div>
      ) : (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      )}
      <Link to="/checkout">
        <Button children={"GO TO CHECKOUT"} />
      </Link>
    </div>
  );
};

export default CartDropdown;
