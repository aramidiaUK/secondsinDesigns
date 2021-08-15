import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import PlayerCard from "../../../../components/Cards/PlayerCard/PlayerCard";
import DisplayedFooter from "../../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../../components/ClubNavbar/ClubNavbar";
import ClubPlayerMenu from "./ClubPlayerMenu";
import "./ClubPlayersStyles.scss";

const ClubPlayers = () => {
  return (
    <div className="club players">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <div className="players__content">
          <ClubPlayerMenu />
          <div className="players__content">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </div>
        </div>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubPlayers;
