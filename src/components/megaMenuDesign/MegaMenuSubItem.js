import React from "react";

const MegaMenuSubItem = ({linkTo, itemName, subText, icon, bgColor}) => {

  return (
    <a href={linkTo} className="sub-nav__box" 
        onMouseOver={(e) => e.currentTarget.style.background =  `${bgColor}`} 
        onMouseLeave={(e) => e.currentTarget.style.background =  `#fff`}>
      <div className="icon-bg" style={{background: bgColor || '#777'}}>
        {icon}
      </div>
      <h4>{itemName}</h4>
      <p>{subText}</p>
    </a>
  );
};

export default MegaMenuSubItem;
