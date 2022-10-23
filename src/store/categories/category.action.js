import { CreateAction } from "../../utils/dispatch-action.utils";
import { CATEGORIES_ACTION_TYPES } from "./category-action.types";

export const setCategories = (categories) => 

      CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)
    
  ;