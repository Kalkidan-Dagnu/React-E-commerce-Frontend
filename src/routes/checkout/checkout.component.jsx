import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cart.selector";
import {
  CheckoutBlock,
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  // const { cartItems, totalPrice } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <Total>
        <span>Total: {totalPrice} ETB</span>
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
