import React from "react";

const ResponsiveMenuSubItem = ({iconLink, colors, sport, title, subText}) => {
  return (
    <div className="responsive-menu-item-sub-menu__content-item">
      <div className="icon-link">
        {iconLink || <i class='bx bx-store-alt' ></i>}
        <h3>
          <small style={{ color: colors }}>{sport}</small>
          {title}{" "}
          <span>
            {subText}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ResponsiveMenuSubItem;
