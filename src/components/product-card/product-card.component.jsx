import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItem } = useContext(CartContext);

  const handleAddItemToCart = () => {
    addItem(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonTypeClass="inverted"
        children={"Add to Cart"}
        onClick={handleAddItemToCart}
      />
    </div>
  );
};

export default ProductCard;
