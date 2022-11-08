import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";
import { userSignOut } from "../../utils/firebase.utils";
import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  // console.log(isCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = async () => {
    dispatch(signOutStart());
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
