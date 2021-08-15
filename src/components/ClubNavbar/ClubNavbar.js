import React from "react";
import ThemeFooterSponsorItem from "../ThemeComponents/ThemeFooterPreview/ThemeFooterSponsorItem";
import ThemedNavbar from "../ThemeComponents/ThemeNavbarPreview/ThemedNavbar";
import ThemedNavbarSponsorItem from "../ThemeComponents/ThemeNavbarPreview/ThemedNavbarSponsorItem";
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
      mainSponsors={[
        <ThemedNavbarSponsorItem
          imageLink={"/assets/images/rocnationSponsor.jpeg"}
          sponsorBackLink={'/'}
          sponsorName={'fifa'}
          key={1}
        />,
        <ThemedNavbarSponsorItem
          imageLink={"/assets/images/espnSponsor.png"}
          sponsorBackLink={'/'}
          sponsorName={'espn'}
          key={2}
        />
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
      <ThemeNavbarItem linkName="Schedule" linkTo={"/club/schedule"}/>
      <ThemeNavbarItem linkName="About" linkTo={"/club/about"}/>
      <ThemeNavbarItem linkName="Store"  linkTo={"/club/store"}/>
      <ThemeNavbarItem linkName="Contact" linkTo={"/club/contact"}/>
      <ThemeNavbarItem linkName="More.." linkTo={"/club/more"}/>
    </ThemedNavbar>
  );
};

export default ClubNavbar;
