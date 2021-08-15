import React from "react";
import "./ThemedNavbarSponsorItemStyles.scss";
const ThemedNavbarSponsorItem = ({imageLink, sponsorName, sponsorBackLink}) => {
  return (
    <div className="navbar-sponsorItem">
      <div className="navbar-sponsorItem__content">
        <a
          href={sponsorBackLink}
          className="navbar-sponsorItem__content-link"
          title={sponsorName}
        >
          <img src={imageLink} alt={sponsorName} />
        </a>
      </div>
    </div>
  );
};

export default ThemedNavbarSponsorItem;
