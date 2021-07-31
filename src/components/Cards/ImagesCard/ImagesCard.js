import React, { useEffect } from "react";
import "./ImagesCard.scss";
import ClubImageViewWidget from "../../ImagesViewWidget/ClubImageViewWidget";
const ImagesCard = ({
  imageLink,
  header,
  dateSince,
  imagesArray,
}) => {

  useEffect(() => {
    document.querySelector('.w-widget').classList.add('active');
  },[])

  const showImageViewerWidget = (e) => {
    const widgetImages = document.querySelectorAll('.w-widget');
    widgetImages.forEach(widget => {
      widget.classList.remove('active');
    })

    e.currentTarget.classList.add('active');
  }

  return (
    <div className="w-widget" onClick={showImageViewerWidget}>
      <div className="images-card">
        <div className="images-card__content">
          <span class="images-card__content-tag tag">Images</span>
          <div className="images-card__content-imageBox">
            <img src={imageLink} alt="card" className="cover-image" />
          </div>
          <div className="images-card__content-infoBox">
            <span className="images-count">
              <span>
                {imagesArray.length}
              </span>
              <i class="bx bx-images" />
            </span>
            <h1>
              {header}
              <span>
                {dateSince}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <span className="selected-arrow"></span>
      <ClubImageViewWidget
          images={
           imagesArray
          }
          title={header}
        />
    </div>
  );
};

export default ImagesCard;
