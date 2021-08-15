import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ThemNavbarItem = ({linkName, linkTo, customStyles, children}) => {

  useEffect(() => {
    const links  = document.querySelectorAll('.themed-nav__content-list-item-link')
    links.forEach((linkItem) => {
      if(linkItem.classList.contains('active')) {
        linkItem.parentElement.classList.add('active');
      }
    })
  })

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
