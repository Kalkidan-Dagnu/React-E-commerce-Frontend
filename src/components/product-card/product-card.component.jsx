import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItem } = useContext(CartContext);

  const handleAddItemToCart = () => {
    addItem(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonTypeClass={BUTTON_TYPE_CLASSES.inverted}
        children={"Add to Cart"}
        onClick={handleAddItemToCart}
      />
    </ProductCardContainer>
  );
};

export default ProductCard;
