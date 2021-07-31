import React, { useState } from "react";
import "./ClubImageViewWidget.scss";
const ClubImageViewWidget = ({ images, title }) => {
  const [position, setPosition] = useState(0);
  
  return (
    <div className="images-viewer">
      <div className="images-viewer__content">
        <div className="images-viewer__content-active">
          <img src={images[position]} alt={title} />
        </div>
        <div className="images-viewer__content-imagesRow">
          {images &&
            images.map((img, index) =>
              <figure
                className={`imageBox imageBox--${index + 1}`}
                key={index}
                onClick={() => setPosition(index)}
              >
                <img src={img} alt="footie" />
              </figure>
            )}
        </div>
      </div>
    </div>
  );
};

export default ClubImageViewWidget;
