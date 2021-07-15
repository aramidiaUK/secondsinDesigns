import React from "react";

const GlassCard = ({header, title, text, linkTo, linkText}) => {
  return (
    <div className="card glass">
      <div className="glass-card-content">
        <h2>{header}</h2>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <a href={linkTo}>{linkText}</a>
      </div>
    </div>
  );
};

export default GlassCard;
