import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.components";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((itemCategory) => (
        <CategoryItem item={itemCategory} key={itemCategory.id} />
      ))}
    </div>
  );
};

export default Categories;
