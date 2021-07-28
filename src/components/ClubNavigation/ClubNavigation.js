import React from "react";

const ClubNavigation = () => {
  return (
    <div className="themed-nav club-nav">
      <div className="themed-nav__top-bar">
        <div className="main-sponsors" />
      </div>
      <div className="themed-nav__content">
        <div className="themed-nav__content-brand">
          <img src="./assets/images/chelsea__logo.png" alt="nav-brand" />
        </div>
        <ul className="themed-nav__content-list">
          <ThemNavbarItem customStyles={customStyles} linkName="Home" />
          <ThemNavbarItem customStyles={customStyles} linkName="News" />
          <ThemNavbarItem customStyles={customStyles} linkName="Media" />
          <ThemNavbarItem customStyles={customStyles} linkName="Contact" />
        </ul>
        <div className="themed-nav__content-account-options">
          <button type="button">
            <i class="bx bx-search" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubNavigation;
