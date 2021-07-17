import React from "react";
import "./MegaMenuAlt.css"
const MegaMenuAltBody = () => {
  return (
    <nav className="mega-menu__body">
      <div className="mega-menu__wrapper">
        <div className="mega-menu__logo">
          <a href="/">Logo</a>
        </div>
        <input type="radio" name="slide" id="sidemenu-btn"/>
        <input type="radio" name="slide" id="cancel-btn"/>
        <ul className="mega-menu__items">
            <label for="cancel-btn" className="btn cancel-btn"><i class='bx bx-x'></i></label>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/" className="desktop-item">Dropdown Menu</a>
            <input type="checkbox" id="show-dropMenu"/>
            <label for="show-dropMenu" className="mobile-item">Dropdown Menu</label>
            <ul className="drop-menu">
                <li><a href="/">Drop menu 1</a></li>
                <li><a href="/">Drop menu 1</a></li>
                <li><a href="/">Drop menu 1</a></li>
                <li><a href="/">Drop menu 1</a></li>
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">Mega Menu</a>
            <input type="checkbox"  id="show-megaMenu"/>
            <label for="show-megaMenu" className="mobile-item">Mega Menu</label>
            <div className="mega-box">
                <div className="mega-box__content">
                    <div className="row">
                        <img src="./assets/images/gameplay.jpeg" alt="mega"/>
                    </div>
                    <div className="row">
                        <header>Design Services</header>
                        <ul className="mega-links">
                            <li><a href="/">Graphics</a></li>
                            <li><a href="/">Vectors</a></li>
                            <li><a href="/">Business Cards</a></li>
                            <li><a href="/">Custom Logo</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <header>Email Services</header>
                        <ul className="mega-links">
                            <li><a href="/">Personal Email</a></li>
                            <li><a href="/">Business Email</a></li>
                            <li><a href="/">Mobile Email</a></li>
                            <li><a href="/">Web Marketing</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <header>Security Services</header>
                        <ul className="mega-links">
                            <li><a href="/">Site Seal</a></li>
                            <li><a href="/">VPS Hosting</a></li>
                            <li><a href="/">Privacy Seal</a></li>
                            <li><a href="/">Website Design</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </li>
          <li>
            <a href="/">Feedback</a>
          </li>
        </ul>
        <label for="sidemenu-btn" className="btn menu-btn"><i class='bx bx-menu' ></i></label>
      </div>
    </nav>
  );
};

export default MegaMenuAltBody;
