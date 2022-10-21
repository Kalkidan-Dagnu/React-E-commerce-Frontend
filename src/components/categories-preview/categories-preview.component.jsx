import { Fragment, useContext } from "react";
import { CategoriesMapContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesMapContext);

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
