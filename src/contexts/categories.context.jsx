import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesMapContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesMapProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

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
