import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer className="cart-dropdown-container">
      {cartItems.length === 0 ? (
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      ) : (
        <CartItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItems>
      )}
      <Button
        onClick={() => navigate("/checkout")}
        children={"GO TO CHECKOUT"}
      />
    </CartDropdownContainer>
  );
};

export default CartDropdown;
