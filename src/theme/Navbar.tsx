import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main_nav_menu ml-auto">
      <ul className="standard_dropdown main_nav_dropdown">
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
          <NavLink to="#">
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink to="contact.html">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
