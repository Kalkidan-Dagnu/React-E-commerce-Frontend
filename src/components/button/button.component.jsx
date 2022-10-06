import "./button.styles.scss";
const Button = ({ children, buttonTypeClass }) => {
  return (
    <buttton className={`button-container ${buttonTypeClass}`}>
      {children}
    </buttton>
  );
};

export default Button;
