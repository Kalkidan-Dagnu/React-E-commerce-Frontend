import { createContext, useEffect, useReducer } from "react";
import { CreateAction } from "../utils/dispatch-action.utils";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesMapContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

const INITIAL_STATE = {
  categoriesMap: {},
};
const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesMapReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in CategoriesMap reducer! `);
  }
};
export const CategoriesMapProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});

  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesMapReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (categoriesMap) => {
    dispatch(
      CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
    );
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesMapContext.Provider value={value}>
      {children}
    </CategoriesMapContext.Provider>
  );
};
