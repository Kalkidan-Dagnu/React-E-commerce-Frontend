import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesMapContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <CategoryPreview title={title} products={categoriesMap[title]} />;
        </Fragment>
      ))}
    </div>
  );
};

export default CategoriesPreview;
