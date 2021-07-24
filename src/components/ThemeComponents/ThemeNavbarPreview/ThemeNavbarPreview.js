import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ThemeNavbarPreview.scss"
import ThemNavbarItem from "./ThemNavbarItem";
const ThemeNavbarPreview = ({textCasing, linkColors}) => {

    const [fontColor, setFontColor] = useState("");
    const [textCase, setTextCase] = useState("")

    useEffect(() => {
        setFontColor(linkColors && linkColors.value || 'uppercase')
        setTextCase(textCasing && textCasing.value || '#fff')
    }, [textCasing, linkColors]);

    const customStyles = {
        color: fontColor,
        textTransform: textCase
    }

  return (
    <div className="theme-component alt">
      <div className="theme-component__content nav-settings">
        <h3 className="theme-component-header">Navigation Bar Preview</h3>
        <div className="themed-nav">
            <div className="themed-nav__top-bar">
                <div className="corp-brand"><h4>SecondsIn.</h4></div>
                <div className="main-sponsors">
                <span className="main-sponsors-item"><img src="./assets/images/aramedia_white.png" alt="nav-brand"/></span>
                <span className="main-sponsors-item"><img src="./assets/images/BodyJunkies.jpeg" alt="nav-brand"/></span>
                </div>
            </div>
            <div className="themed-nav__content">
                <div className="themed-nav__content-brand"><img src="./assets/images/chelsea__logo.png" alt="nav-brand"/></div>
                <ul className="themed-nav__content-list">
                    <ThemNavbarItem customStyles={customStyles} linkName="Home"/>
                    <ThemNavbarItem customStyles={customStyles} linkName="News"/>
                    <ThemNavbarItem customStyles={customStyles} linkName="Media"/>
                    <ThemNavbarItem customStyles={customStyles} linkName="Contact"/>
                </ul>
                <div className="themed-nav__content-account-options">
                    <button type="button"><i class='bx bx-search' ></i><span>Search</span></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeNavbarPreview;
