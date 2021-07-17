import React, { useEffect } from "react";
import SideMenuItem from "./SideMenuItem";
import "./NavigationStyles.css";

const SideMenuAlt = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".list-item");
    listItems[0].classList.add("active");
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

  const toggleBtn  = () => {
    const menu  = document.querySelector('.navigation-alt');
    const toggleClose = document.querySelector('.close-toggle');

    toggleClose.classList.toggle('active');
    menu.classList.toggle('active')
  }

  return (
    <div className="navigation-alt-component-body remove-when-used">
      <div className="navigation-alt">
        <ul className="list">
          <SideMenuItem text="Home" icon="home-outline" />
          <SideMenuItem text="Chat" icon="chatbubbles-outline" />
          <SideMenuItem text="Settings" icon="settings-outline" />
          <SideMenuItem text="Help" icon="help-outline" />
          <SideMenuItem text="Password" icon="lock-closed-outline" />
          <SideMenuItem text="Sign Out" icon="log-out-outline" />
        </ul>
      </div>
      <div className="close-toggle" onClick={toggleBtn}>
        <ion-icon name="menu-outline" class="open" />
        <ion-icon name="close-outline" class="close" />
      </div>
    </div>
  );
};

export default SideMenuAlt;
