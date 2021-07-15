import React from "react";
import RippleButton from "../RippleButtons/RippleButton";

const CarouselItem = ({imageLink, date, title, textContent, linkName, linkTo}) => {
  return (
    <div className="article_content">
      <div className="article_slider__img">
        <img src={imageLink} alt="placeholder" />
      </div>
      <div className="article_slider__content">
        <div className="article_slider__content-date">{date}</div>
        <div className="article_slider__content-title">{title}</div>
        <div className="article_slider__content-text">
          {textContent}
        </div>
        <RippleButton
            buttonText={'READ MORE'}
        />
      </div>
    </div>
  );
};

export default CarouselItem;
