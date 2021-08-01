import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import ImagesCard from "../../../../components/Cards/ImagesCard/ImagesCard";
import ClubContentRow from "../../../../components/ClubContentRow/ClubContentRow";
import DisplayedFooter from "../../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../../components/ClubNavbar/ClubNavbar";

const ClubImages = () => {
  return (
    <div className="club">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <ClubContentRow
          columns="row-6"
          header={"Club Photos"}
          subHeader={"Recently Added"}
        >
          <ImagesCard
            imageLink="/assets/images/lakers.png"
            header="Bootcamp sessions"
            dateSince="1 Week ago"
            imagesArray={ ["/assets/images/lakers.png", "/assets/images/mutdStadium.jpg",  "/assets/images/d_wade.jpg", "/assets/images/football-2.jpg"]}
          />
          <ImagesCard
            imageLink="/assets/images/gameplay.jpeg"
            header="Getting ready for the season to start"
            dateSince="2 Week ago"
            imagesArray={ ["/assets/images/gameplay.jpeg", "/assets/images/rugby.jpg", "/assets/images/affootball.jpg", "/assets/images/multiSports-min.jpg", "/assets/images/football-2.jpg"]}
          />
          <ImagesCard
            imageLink="/assets/images/nba.png"
            header="Great training session with the youth team"
            dateSince="1 Week ago"
            imagesArray={ ["/assets/images/nba.png", "/assets/images/nflsponsor.png", "/assets/images/fa.jpeg", "/assets/images/chelsea__logo.png", "/assets/images/football.jpg"]}
          />
        </ClubContentRow>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubImages;
