import React from "react";
import { NavLink } from "react-router-dom";
import "./ThemedNavbarStyles.scss";
const ThemedNavbar = ({ mainSponsors, newsContent, children, buttonsAddin, homeLink }) => {
  return (
    <nav className="themed-nav">
      <div className="themed-nav__top-bar">
        <div className="themed-nav__top-bar-content">
          <div className="news-reel">
            {newsContent}
          </div>
          <div className="main-sponsors">
            {mainSponsors}
          </div>
        </div>
      </div>
      <div className="themed-nav__content">
        <NavLink to={homeLink || '#'} className="themed-nav__content-brand">
          <img src={window.$fallbackLogo} alt="nav-brand" />
        </NavLink>
        <ul className="themed-nav__content-list">
          {children}
        </ul>
        <div className="themed-nav__content-account-options">
            <div className="themed-nav__content-account-options-content">
            {buttonsAddin}
            <button type="button">
              <i className="bx bx-search" />
              <span>Search</span>
            </button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default ThemedNavbar;
