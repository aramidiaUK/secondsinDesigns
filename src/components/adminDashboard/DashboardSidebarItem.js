import React from "react";

const DashboardSidebarItem = ({linkTo, linkName, boxIcon}) => {
  return (
    <li className="list-item">
      <a href={linkTo} className="list-item-link">
        {boxIcon}
        <span className="list-item-link-name">{linkName}</span>
      </a>
      <span className="tooltip">{linkName}</span>
    </li>
  );
};

export default DashboardSidebarItem;
