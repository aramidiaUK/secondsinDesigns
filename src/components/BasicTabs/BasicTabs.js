import React from "react";
import "./BasicTabsStyles.scss"
const BasicTabs = ({children}) => {
  
  return (
    <div className="tabs">
      {children}
    </div>
  );
};

export default BasicTabs;
