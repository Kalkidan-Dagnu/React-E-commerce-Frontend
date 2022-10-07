import "./button.styles.scss";
const Button = ({ children, buttonTypeClass, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonTypeClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
