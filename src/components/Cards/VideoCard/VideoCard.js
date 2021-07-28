import React from "react";
import "../NewsCard/NewsCardStyles.scss";
import "./VideoCard.scss";
import "../utilCardStyles.scss";
const VideoCard = ({
    post,
  backdropImageLink,
  sponsorImageLink,
  caption,
  stylesProps,
  classAddin
}) => {
  return (
    <div className={`util-card ${classAddin}`} {...stylesProps}>
      <div className="util-card__content">
        <span className="util-card__content-tag">Video</span>
        <div className="util-card__content-play-btn"><span className="util-card__content-play-btn__container"><i class='bx bx-play' ></i></span></div>
        <div className="util-card__content-imageBox">
          <img src={backdropImageLink} alt="util" />
        </div>
        <div className="util-card__content-captionOptions">
          {sponsorImageLink &&
            <div className="util-card__content-captionOptions-brand">
              <img src={sponsorImageLink} alt={caption} />
            </div>}
          <header className="util-card__content-captionOptions-caption">
            <h2>
              {caption}
            </h2>
          </header>
          <footer className="util-card__content-captionOptions-footer">
            <div className="news-card__content-footer-author">
              <img
                src={
                  post.author.user.imageLink || "/assets/images/manu__logo.png"
                }
                alt={"club brand"}
              />
              <div className="name">
                <span className="author">
                  {post.author.user.full_name}
                </span>
                <span className="function">
                  {post.author.user.occupation}
                </span>
              </div>
            </div>
            <div className="news-card__content-footer-date">
              <span className="timeSince">2 days ago</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
