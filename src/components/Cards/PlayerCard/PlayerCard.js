import React from "react";
import "./PlayerCardStyles.scss";
const PlayerCard = ({ playerProfile }) => {
  return (
    <div className="card player-card">
      <div className="player-card__content">
        <div className="player-card__content-imageBox">
          <img
            src="https://storage.googleapis.com/secondsin/5fabac7b786f3480fab6f48e/player_images/ckoyulmfi0000j7slgktb9raz_600"
            alt="firstName"
          />
        </div>
        <div className="player-card__content-namePosition">
          <div className="player-card__content-namePosition-content">
            <h1>First Name</h1>
            <h1>Last Name</h1>
            <h4>Position</h4>
          </div>
        </div>
        <div className="player-card__content-details">
          <span className="status no">9</span>
          <span className="status country-flag">
            <img
              src="https://www.countryflags.io/GB/shiny/64.png"
              alt="United Kingdom"
            />
          </span>
          <span className="status club-flag">
            <img src={window.$fallbackLogo} alt={window.$fullName} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
