import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesMapContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, ProductsContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesMapContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <ProductsContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ProductsContainer>
    </>
  );
};

export default Category;
