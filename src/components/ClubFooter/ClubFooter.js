import React from "react";
import "./ClubFooter.scss"

const ClubFooter = ({ clubName, children, sponsorItems, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="footer__club-sponsors">
        <div className="footer__club-sponsors-content">
          <ul>
            {sponsorItems}
          </ul>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content-links">
          {children}
          <div className="footer__content-links-end">
            <div className="footer__content-links-social">
              {socialLinks}
            </div>
            <div className="footer__content-links-club-brand">
              <h4>
                {clubName}
              </h4>
              <img src={window.$fallbackLogo} alt="club brand" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClubFooter;
