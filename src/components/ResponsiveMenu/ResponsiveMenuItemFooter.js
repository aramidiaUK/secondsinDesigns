import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveMenuItemFooter = ({header, linkTo, linkeText, color }) => {
  return (
    <div className="responsive-menu-item-sub-menu__footer">
      <div className="responsive-menu-item-sub-menu__footer-content">
        <h3>{header}</h3>
        <NavLink to={linkTo} style={{background: color}}>
          {linkeText} <i class="bx bx-right-arrow-alt" />
        </NavLink>
      </div>
    </div>
  );
};

export default ResponsiveMenuItemFooter;
