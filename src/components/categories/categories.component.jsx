import CategoryItem from "../category-item/category-item.components";
import { CategoriesContainer } from "./categories.styles";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((itemCategory) => (
        <CategoryItem item={itemCategory} key={itemCategory.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
