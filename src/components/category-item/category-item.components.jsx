import "./category-item.styles.scss";

const CategoryItem = ({ item: { id, title, imageUrl } }) => {
  console.log(id);
  return (
    <div
      key={id}
      className="category-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="background-image" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
