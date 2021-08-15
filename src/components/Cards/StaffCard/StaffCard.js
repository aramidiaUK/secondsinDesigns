import React from "react";
import "./StaffCard.scss";
const StaffCard = ({ staffProfile }) => {
  return (
    <div className="card staff-card">
      <div className="staff-card__content">
        <div className="staff-card__content-imageBox">
          <img src={staffProfile.imageLink} alt={staffProfile.fullName} />
        </div>
        <div className="staff-card__content-info">
          <div className="staff-card__content-info-status">
            <h2>
              {staffProfile.fullName}
            </h2>
            <h3>
              {staffProfile.occupation}
            </h3>
          </div>
          <div className="staff-card__content-info-socials">
            {staffProfile.twitter &&
              <a href="/#" className="twitter">
                <ion-icon name="logo-twitter" />
              </a>}
            {staffProfile.linkedIn &&
              <a href="/#" className="linkedin">
                <ion-icon name="logo-linkedin" />
              </a>}
            {staffProfile.facebook &&
              <a href="/#" className="facebook">
                <ion-icon name="logo-facebook" />
              </a>}
            {staffProfile.insta &&
              <a href="/#" className="insta">
                <ion-icon name="logo-instagram" />
              </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
