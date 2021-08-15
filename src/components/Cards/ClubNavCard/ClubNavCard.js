import React from 'react'
import "./ClubNavCard.scss";
const ClubNavCard = ({text}) => {
    return (
        <div div className="clubNav-card">
            <div className="clubNav-card__content">
                <div className="clubNav-card__content-imageBox">
                    <img src={window.$fallbackLogo} alt="brand"/>
                </div>
                <div className="clubNav-card__content-text">
                    <span>{text}</span>
                </div>
            </div>
        </div>
    )
}

export default ClubNavCard
