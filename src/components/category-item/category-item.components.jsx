import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";
const CategoryItem = ({ item: { id, title, imageUrl } }) => {
  return (
    <CategoryItemContainer
      key={id}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <BackgroundImage />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
