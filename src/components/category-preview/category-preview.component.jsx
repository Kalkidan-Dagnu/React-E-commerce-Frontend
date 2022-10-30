import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle to={`/shop/${title}`}>
        <h2>{title}</h2>
      </CategoryTitle>

      <Preview>
        {products
          .filter((_, inx) => inx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
