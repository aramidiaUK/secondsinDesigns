import React from "react";
import { NavLink } from "react-router-dom";

const ThemNavbarItem = ({linkName, customStyles, children}) => {
  return (
    <li className="themed-nav__content-list-item">
      <NavLink
        to="/"
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
