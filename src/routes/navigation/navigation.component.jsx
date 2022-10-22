import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";
import { useContext } from "react";
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
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

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
              SIGN OUT | {currentUser.displayName}
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
