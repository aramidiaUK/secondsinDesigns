import React from "react";
import { NavLink } from "react-router-dom";

const ThemNavbarItem = ({linkName, linkTo, customStyles, children}) => {

  return (
    <li className="themed-nav__content-list-item">
      <NavLink
        to={linkTo || '/'}
        className="themed-nav__content-list-item-link"
        style={{ ...customStyles }}
      >
        {linkName}
      </NavLink>
      {children}
    </li>
  );
};

export default ThemNavbarItem;
