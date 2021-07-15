import React from "react";

const ProCard = ({imageLink, name, title, linkTo, linkedIn }) => {
  return (
    <div className="card pro">
      <div className="circle">
        <div className="imgBox-pro">
          <img src={imageLink} alt={name} />
        </div>
      </div>
      <div className="card-pro-content">
        {
            linkedIn &&
            <a href="/#">
                <ion-icon name="logo-linkedin" />
            </a>
        }
        
        <h3>{name}</h3>
        <div className="textIcon">
          <h4>{title}</h4>
          <a href={linkTo}>
            <ion-icon name="arrow-forward-outline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
