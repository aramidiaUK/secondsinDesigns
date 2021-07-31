import React from "react";
import { NavLink } from "react-router-dom";
import "./ClubMediaMenuStyles.scss";
const ClubMediaMenu = () => {
  return (
    <div className="media-menu">
      <div className="media-menu__content">
        <div className="btn-wrap">
          <NavLink exact to="/club/media/videos" className="btn-alt">
            Club Videos
          </NavLink>
        </div>
        <div className="btn-wrap">
          <NavLink exact to="/club/media/photos" className="btn-alt">
            Club Photos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ClubMediaMenu;
