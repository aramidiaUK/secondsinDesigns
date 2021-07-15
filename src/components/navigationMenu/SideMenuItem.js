import React from "react";

const SideMenuItem = ({link, icon, text, onclick}) => {

  return (
    <li className={`list-item`} onClick={onclick}>
        <b></b>
        <b></b>
        <a href={link ? link : '#'} className="list-item-link">
        <span className="list-item-icon"><ion-icon name={icon}></ion-icon></span>
        <span className="list-item-text">{text}</span>
        </a>
    </li>
  );
};

export default SideMenuItem;
