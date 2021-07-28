import React from "react";
import "./ADCard.scss";
import "../utilCardStyles.scss";
const ADCard = ({
  backdropImageLink,
  brandImageLink,
  caption,
  buttonText,
  stylesProps
}) => {
  return (
    <div className={`util-card`} {...stylesProps}>
      <div className="util-card__content">
        <span className="util-card__content-tag">Sponsored AD</span>
        <div className="util-card__content-imageBox">
          <img src={backdropImageLink} alt="util" />
        </div>
        <div className="util-card__content-captionOptions">
          {brandImageLink &&
            <div className="util-card__content-captionOptions-brand">
              <img src={brandImageLink} alt={caption} />
            </div>}
          <header className="util-card__content-captionOptions-caption">
            <h2>
              {caption}
            </h2>
          </header>
          <a href="/" className="btn util">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ADCard;
