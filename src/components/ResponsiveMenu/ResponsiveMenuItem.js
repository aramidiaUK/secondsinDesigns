import React from "react";
import ResponsiveMenuItemFooter from "./ResponsiveMenuItemFooter";

const ResponsiveMenuItem = ({ title, children, footer }) => {
  return (
    <div class="responsive-menu-item">
      <div class="responsive-menu-item-header">
        <a href="/" onClick={e => e.preventDefault()}>
          {title}
        </a>
      </div>
      <div class="responsive-menu-item-sub-menu">
        <div className="responsive-menu-item-sub-menu__content">
          {children}
        </div>
        {footer &&
          <ResponsiveMenuItemFooter
            header={[footer.header]}
            linkTo={[footer.link]}
            linkeText={[footer.linkText]}
            color={[footer.color]}
          />}
      </div>
    </div>
  );
};

export default ResponsiveMenuItem;
