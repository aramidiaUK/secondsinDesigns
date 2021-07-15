import React from "react";
import MegaMenuItem from "./MegaMenuItem";
import MegaMenuSubItem from "./MegaMenuSubItem";

const MegaMenuBody = () => {
  return (
    <div className="megaMenuBody">
      <header className="nav-header">
        <div className="row">
          <div className="logo-section">
            <a href="/">LOGO</a>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <MegaMenuItem title={"Services"}>
                <MegaMenuSubItem
                  linkTo={"#"}
                  itemName={"Marketing"}
                  subText={"Dedicated ad platform"}
                  icon={[<i class="bx bx-bookmark-alt-plus" />]}
                  bgColor={"#34495e"}
                />
                <MegaMenuSubItem
                  linkTo={"#"}
                  itemName={"Storage"}
                  subText={"Reliable data storage"}
                  icon={[<i class='bx bx-coin-stack' ></i>]}
                  bgColor={"#2980b9"}
                />
              </MegaMenuItem>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MegaMenuBody;
