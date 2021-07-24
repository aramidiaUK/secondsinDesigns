import React, { useEffect, useState } from "react";
import "./ThemeCardPreview.scss";
const ThemeCardPreview = ({ transitionSettings, radiusSettings }) => {
  const [transitionStyle, setTransitionStyle] = useState("");
  const [radius, setRadius] = useState("");

  useEffect(
    () => {
      setTransitionStyle(
        transitionSettings && `all ${transitionSettings}s ease`
      );
      setRadius(radiusSettings && `${radiusSettings}px`);
    },
    [transitionSettings, radiusSettings]
  );

  const cardStyles = {
    borderRadius: radius
  };

  const imageTransition = {
    transition: transitionStyle
  };

  return (
    <div className="theme-component cards">
      <div className="theme-component__content">
        <h3 className="theme-component-header">Cards Preview</h3>
        <div className="news-card" style={{ ...cardStyles }}>
          <div className="news-card__content">
            <span className="news-card__content-tag">News</span>
            <div className="news-card__content-imageBox">
              <img
                src="./assets/images/football.jpg"
                alt="news"
                style={{ ...imageTransition }}
              />
            </div>
            <div className="news-card__content-text">
              <div className="news-card__content-text-header">
                <h2>Example news card - new club added to the S...</h2>
              </div>
              <div className="news-card__content-text-description">
                <p>
                  In publishing and graphic des ign, Lorem ipsum may be used as
                  a placeholder before final copy is available.
                </p>
              </div>
            </div>
            <div className="news-card__content-footer">
              <div className="news-card__content-footer-author">
                <img src="./assets/images/chelsea__logo.png" />
                <div className="name">
                  <span className="author">John Smith</span>
                  <span className="function">Club Manager</span>
                </div>
              </div>
              <div className="news-card__content-footer-date">
                <span className="timeSince">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCardPreview;
