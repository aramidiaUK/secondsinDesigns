import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import TeamCard from "../../../components/Cards/TeamCard/TeamCard";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import "./ClubTeams.scss";
import ClubTeamsTop from "./ClubTeamsTop";

const ClubTeams = () => {
  return (
    <div className="club teams">
      <ClubNavbar />
      <Breadcrumbs />
        <ClubTeamsTop/>
        <div className="mid">
        <div className="teams-content">
          <div className="teams-content-row">
            <TeamCard 
              teamDetails={{
                  imageLink: "/assets/images/basketball.jpg",
                  teamName: "Youth team",
                  teamType: "Mixed Team",
              }}
            />
            <TeamCard 
              teamDetails={{
                  imageLink: "/assets/images/football.jpg",
                  teamName: "Reserve team",
                  teamType: "Mens Team",
              }}
            />
          </div>
        </div>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubTeams;
