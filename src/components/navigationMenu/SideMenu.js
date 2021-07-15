import React, { useEffect } from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".list-item");
    listItems[0].classList.add('active')
    const activeLink = e => {
      listItems.forEach(item => {
        item.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    };

    listItems.forEach(item => {
      item.addEventListener("click", activeLink);
    });
  }, []);

  return (
    <div className="navigation-component-body remove-when-used">
      <div className="navigation">
        <ul className="list">
          <SideMenuItem text="Home" icon="home-outline" />
          <SideMenuItem text="Chat" icon="chatbubbles-outline" />
          <SideMenuItem text="Settings" icon="settings-outline" />
          <SideMenuItem text="Help" icon="help-outline" />
          <SideMenuItem text="Password" icon="lock-closed-outline" />
          <SideMenuItem text="Sign Out" icon="log-out-outline" />
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
