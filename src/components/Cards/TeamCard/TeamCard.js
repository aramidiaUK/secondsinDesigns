import React from "react";
import "./TeamCardStyles.scss";
const TeamCard = ({classAddin, teamDetails}) => {
  return (
    <div className={`team-card ${classAddin && classAddin}`}>
      <div className="team-card__content">
        <div className="team-card__content-imageBox">
          <img src={teamDetails.imageLink || "/assets/images/teamPhoto.jpg"} alt={teamDetails.teamName} />
        </div>
        <div className="team-card__content-text">
          <div className="team-card__content-text--content">
            <h1>{teamDetails.teamName}</h1>
            <h4>{teamDetails.teamType}</h4>
          </div>
        </div>
        <div className="team-card__content-brand">
          <img src="/assets/images/manu__logo.png" alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
