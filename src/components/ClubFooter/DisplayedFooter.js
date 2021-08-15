import React from "react";
import ThemeFooterSponsorItem from "../ThemeComponents/ThemeFooterPreview/ThemeFooterSponsorItem";
import ClubFooter from "./ClubFooter";
import ClubFooterLinksGroup from "./ClubFooterLinksGroup";
import ClubFooterLinksGroupItem from "./ClubFooterLinksGroupItem";

const DisplayedFooter = () => {
  return (
    <ClubFooter
      clubName={window.$clubName}
      sponsorItems={[
        <ThemeFooterSponsorItem
          key={1}
          image={"/assets/images/rocnationSponsor.jpeg"}
        />,
        <ThemeFooterSponsorItem
          key={2}
          image={"/assets/images/klutchSponsorship.jpeg"}
        />,

        <ThemeFooterSponsorItem key={3} image={"/assets/images/fifa.png"} />,
        <ThemeFooterSponsorItem key={4} image={"/assets/images/nba.png"} />,
        <ThemeFooterSponsorItem
          key={5}
          image={"/assets/images/espnSponsor.png"}
        />,
        <ThemeFooterSponsorItem
          key={6}
          image={"/assets/images/nflsponsor.png"}
        />,
        <ThemeFooterSponsorItem
          key={7}
          image={"/assets/images/rugbySponsor.png"}
        />,
        <ThemeFooterSponsorItem key={8} image={"/assets/images/fa2.png"} />
      ]}
    >
      <ClubFooterLinksGroup>
        <ClubFooterLinksGroupItem linkName="home" />
        <ClubFooterLinksGroupItem linkName="News" />
        <ClubFooterLinksGroupItem linkName="Photos" />
        <ClubFooterLinksGroupItem linkName="Videos" />
      </ClubFooterLinksGroup>
      <ClubFooterLinksGroup>
        <ClubFooterLinksGroupItem linkName="Teams" />
        <ClubFooterLinksGroupItem linkName="Players" />
        <ClubFooterLinksGroupItem linkName="About" />
        <ClubFooterLinksGroupItem linkName="Schedule" />
      </ClubFooterLinksGroup>
      <ClubFooterLinksGroup>
        <ClubFooterLinksGroupItem linkName="Shop" />
        <ClubFooterLinksGroupItem linkName="Contact" />
        <ClubFooterLinksGroupItem linkName="Opportunities" />
        <ClubFooterLinksGroupItem linkName="Social" />
      </ClubFooterLinksGroup>
    </ClubFooter>
  );
};

export default DisplayedFooter;
