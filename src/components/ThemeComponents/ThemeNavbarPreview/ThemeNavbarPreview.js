import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ThemeNavbarPreview.scss";
import ThemeNavbarItem from "./ThemeNavbarItem";
import ThemedNavbar from "./ThemedNavbar";
const ThemeNavbarPreview = ({ textCasing, linkColors }) => {
  const [fontColor, setFontColor] = useState("");
  const [textCase, setTextCase] = useState("");

  useEffect(
    () => {
      setFontColor((linkColors && linkColors.value) || "uppercase");
      setTextCase((textCasing && textCasing.value) || "#fff");
    },
    [textCasing, linkColors]
  );

  const customStyles = {
    color: fontColor,
    textTransform: textCase
  };

  return (
    <div className="theme-component alt">
      <div className="theme-component__content nav-settings">
        <h3 className="theme-component-header">Navigation Bar Preview</h3>
        <ThemedNavbar>
          <ThemeNavbarItem customStyles={customStyles} linkName="Home" />
          <ThemeNavbarItem customStyles={customStyles} linkName="News" />
          <ThemeNavbarItem customStyles={customStyles} linkName="Media" />
          <ThemeNavbarItem customStyles={customStyles} linkName="Contact" />
        </ThemedNavbar>
      </div>
    </div>
  );
};

export default ThemeNavbarPreview;
