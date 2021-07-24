import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ThemeFooterPreview.scss";
import ThemeFooterSponsorItem from "./ThemeFooterSponsorItem";
const ThemeFooterPreview = ({
  displaySponsors,
  navLinksCasing,
  navLinksColor
}) => {
  const [showSponsors, setShowSponsors] = useState("");
  const [linksColors, setLinksColors] = useState("");
  const [linksCasing, setLinksCasing] = useState("");

  useEffect(
    () => {
      setShowSponsors((displaySponsors && displaySponsors.value) || "flex");
      setLinksColors((navLinksColor && navLinksColor.value) || "#fff");
      setLinksCasing((navLinksCasing && navLinksCasing.value) || "capitalize");
    },
    [displaySponsors, navLinksCasing, navLinksColor]
  );
  const sponsorsBarStyles = {
    display: showSponsors
  };

  const footerStyles = {
    color: linksColors,
    textTransform: linksCasing
  };

  const clubHeaderStyles = {
        color: linksColors,
  }

  return (
    <div className="theme-component footer-preview">
      <div className="theme-component__content">
        <h3 className="theme-component-header">Footer Preview</h3>
        <div className="themed-footer">
          <div className="footer">
            <div
              className="footer__club-sponsors"
              style={{ ...sponsorsBarStyles }}
            >
              <ul>
                <ThemeFooterSponsorItem
                  image={"./assets/images/rocnationSponsor.jpeg"}
                />
                <ThemeFooterSponsorItem
                  image={"./assets/images/klutchSponsorship.jpeg"}
                />
                <ThemeFooterSponsorItem image={"./assets/images/fifa.png"} />
                <ThemeFooterSponsorItem image={"./assets/images/nba.png"} />
                <ThemeFooterSponsorItem
                  image={"./assets/images/espnSponsor.png"}
                />
                <ThemeFooterSponsorItem
                  image={"./assets/images/nflsponsor.png"}
                />
                <ThemeFooterSponsorItem
                  image={"./assets/images/rugbySponsor.png"}
                />
                <ThemeFooterSponsorItem image={"./assets/images/fa2.png"} />
              </ul>
            </div>
            <div className="footer__content">
              <div className="footer__content-links">
                <ul>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Images
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Videos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      About
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Teams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Players
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Sponsors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Subscribe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Schedule
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Opportunities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" style={{ ...footerStyles }}>
                      Social
                    </NavLink>
                  </li>
                </ul>
                <div className="footer__content-links-end">
                  <div className="footer__content-links-social">
                    <i class="bx bxl-facebook-circle" />
                    <i class="bx bxl-twitter" />
                    <i class="bx bxl-instagram-alt" />
                  </div>
                  <div className="footer__content-links-club-brand">
                    <h4 style={{...clubHeaderStyles}}>My Added Club</h4>
                    <img
                      src="./assets/images/chelsea__logo.png"
                      alt="club brand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeFooterPreview;
