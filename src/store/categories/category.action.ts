import { Action, ActionWithPayload } from "./../../utils/dispatch-action.utils";
import { CreateAction } from "../../utils/dispatch-action.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { Category, CategoryItem } from "./category.types";

export type SetCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccees = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  CategoryItem[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoriesAction =
  | SetCategories
  | FetchCategoriesStart
  | FetchCategoriesSuccees
  | FetchCategoriesFailed;

export const setCategories = (categories: Category[]): SetCategories =>
  CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccees = (
  categoriesArray: CategoryItem[]
): FetchCategoriesSuccees =>
  CreateAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
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
