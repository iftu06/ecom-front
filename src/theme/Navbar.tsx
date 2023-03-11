import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../auth/auth-reducer";
import CustomModal from "../common/custom-modal";
import SignIn from "../auth/sign-in";
import SignUp from "../auth/sign-up";
import { cartActions } from "../cart/cart-reducer";
import CommonService from "../common/service/commoun-service";
import AuthService from "../common/service/auth-service";

const NavBar = () => {
  const commonService = new CommonService();
  const authSerive: AuthService = new AuthService();

  const dispatch = useDispatch();

  const isAuthenticated: boolean = useSelector(
    (state: any) => state?.auth?.isAuthenticated
  );

  const totItemInCart: number = useSelector(
    (state: any) => state?.cart?.totQauntity
  );

  const isCartVisible: boolean = useSelector(
    (state: any) => state?.cart?.isCartVisible
  );

  const isSignInModalOpen: boolean = useSelector(
    (state: any) => state?.auth?.isSignInModalOpen
  );

  const isSignUpModalOpen: boolean = useSelector(
    (state: any) => state?.auth?.isSignUpModalOpen
  );

  const hideSignInModal = () => {
    dispatch(authActions.hideSignInModal());
  };

  const showSignInModal = () => {
    dispatch(authActions.showSignInModal());
  };

  const login = () => {
    authSerive.login(window.location.href);
  };

  const logout = () => {
    authSerive.logout();
  };

  const hideSignUpModal = () => {
    dispatch(authActions.hideSignUpModal());
  };

  const showSignUpModal = () => {
    dispatch(authActions.showSignUpModal());
  };

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <div className="main_nav_menu ms-auto">
      <CustomModal
        render={() => <SignIn />}
        modalHeader="Sign In"
        show={isSignInModalOpen}
        hideModal={hideSignInModal}
      ></CustomModal>

      <CustomModal
        render={() => <SignUp />}
        modalHeader="Sign Up"
        show={isSignUpModalOpen}
        hideModal={hideSignUpModal}
      ></CustomModal>
      <ul className="standard_dropdown main_nav_dropdown">
        <li>
          <div className="cart_container d-flex flex-row align-items-center justify-content-end">
            <div className="cart_icon">
              <img src="images/cart.png" alt="" />
              <div className="cart_count">
                <span>{totItemInCart}</span>
              </div>
            </div>
            <div className="cart_content">
              <div className="cart_text">
                <a href="#" onClick={toggleCart}>
                  Cart
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="hassubs">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="hassubs">
          <NavLink to="#">Featured Brands</NavLink>
        </li>
        <li className="hassubs">
          <NavLink to="#">Pages</NavLink>
        </li>
        <li>
          <NavLink to="contact.html">Contact</NavLink>
        </li>

        {!isAuthenticated && (
          <li>
            <a href="#" onClick={login}>
              Log In
            </a>
          </li>
        )}

        {isAuthenticated && (
          <form action="/logout" method="POST">
            <button type="submit" color="secondary">
              Logout
            </button>
          </form>
          // <li>
          //   <a href="#" onClick={logout}>
          //     Log Out
          //   </a>
          // </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
