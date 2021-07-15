import React from "react";

const FoldOutCard = ({imageLink, title, text, linkTo, linkText}) => {
  return (
    <div className="card foldOut">
      <div className="foldOutCard-content closed">
        <div className="foldOutCard-closed-content">
          <img src={imageLink} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
      <div className="foldOutCard-content opened">
        <div className="foldOutCard-opened-content">
          <p>
            {text}
          </p>
          <a href={linkTo}>{linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default FoldOutCard;
