import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { userSignOut } from "../../utils/firebase.utils";
import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
