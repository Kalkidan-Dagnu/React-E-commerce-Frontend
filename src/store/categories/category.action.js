import { CreateAction } from "../../utils/dispatch-action.utils";
import { CATEGORIES_ACTION_TYPES } from "./category-action.types";

export const setCategories = (categories) =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccees = (categoriesArray) =>
  CreateAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccees(categoriesArray));
//     } catch(error) {
//     dispatch(fetchCategoriesFailed(error))
//     }
// }
