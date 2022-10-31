import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import CategoryPreview from "../category-preview/category-preview.component";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesMapContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="categories-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <CategoryPreview title={title} products={categoriesMap[title]} />;
          </Fragment>
        ))
      )}
    </div>
  );
};

export default CategoriesPreview;
