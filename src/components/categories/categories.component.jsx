import CategoryItem from "../category-item/category-item.components";
import { CategoriesContainer } from "./categories.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    routeUrl: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    routeUrl: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    routeUrl: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    routeUrl: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    routeUrl: "shop/mens",
  },
];

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((itemCategory) => (
        <CategoryItem item={itemCategory} key={itemCategory.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
