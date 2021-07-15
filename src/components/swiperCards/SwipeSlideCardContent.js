import React from "react";

const SwipeSlideCardContent = ({ icon, iconClass, text, img, name, title }) => {
  return (
    <div className="swiper-content">
      <span className={`swiper-content-menu ${iconClass ? iconClass : ""}`}>
        <ion-icon name={icon} />
      </span>
      <div className="swiper-content-info">
        <p>
          {text}
        </p>
        <div className="details">
          <div className="imgBox">
            <img src={img} alt={name}/>
          </div>
          <h3>
            {name}
            <span>
              {title}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SwipeSlideCardContent;
