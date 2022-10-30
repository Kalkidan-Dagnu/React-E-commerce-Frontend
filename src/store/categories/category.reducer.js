
import { CATEGORIES_ACTION_TYPES } from "./category-action.types";

const CATEGORIES_INITIAL_STATE = {
    categoriesArray:[],
    isLoading: false
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
      case CATEGORIES_ACTION_TYPES.SET_CATEGORIES: 
      return {
        ...state,categoriesArray: payload
      }
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
        return {
          ...state,
          isLoading: true,
                }
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          categoriesArray: payload, isLoading: false
              }
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
        return {
          ...state,
          error: payload, isLoading: false
              }
      default:
        return state;
    }
  };