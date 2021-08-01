import React from "react";
import ThemedNavbar from "../ThemeComponents/ThemeNavbarPreview/ThemedNavbar";
import ThemeNavbarItem from "../ThemeComponents/ThemeNavbarPreview/ThemeNavbarItem";
import Ticker from "../Ticker/Ticker";
const ClubNavbar = () => {
  return (
    <ThemedNavbar
      homeLink="/club/home"
      newsContent={[<Ticker />]}
      buttonsAddin={[
        <button type="button">
          <i className="bx bx-user" />
          <span>Henry</span>
        </button>
      ]}
    >
      <ThemeNavbarItem linkName="Teams" linkTo={"/club/lineups"} />
      <ThemeNavbarItem linkName="News" linkTo={"/club/news"}>
        <div className="mega-element">
          <h1>This is mega body</h1>
        </div>
      </ThemeNavbarItem>
      <ThemeNavbarItem linkName="Media" linkTo={"/club/media"}/>
      <ThemeNavbarItem linkName="Opportunities" linkTo={"/club/opportunities"}/>
      <ThemeNavbarItem linkName="Schedule" />
      <ThemeNavbarItem linkName="About" />
      <ThemeNavbarItem linkName="Store"  linkTo={"/club/store"}/>
      <ThemeNavbarItem linkName="Contact" />
      <ThemeNavbarItem linkName="More.." />
    </ThemedNavbar>
  );
};

export default ClubNavbar;
