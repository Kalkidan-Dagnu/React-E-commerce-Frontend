import ProductCard from "../../components/product-card/product-card.component";
import SHOP_DATA from "../../shop-data.json";
import "./shop.styles.scss";
const Shop = () => {
  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Shop;
