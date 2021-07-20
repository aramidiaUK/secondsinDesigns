import React from "react";
import "./PricingCardFeatureStyles.scss"
const PricingCardFeature = ({featureTitle, status}) => {
  return (
    <li  className="si-pricing__content-feature">
      <span className="si-pricing__content-feature-name">
        {featureTitle}
      </span>
      <span className={`si-pricing__content-feature-status ${status}`}>
        { status ? <i class="bx bx-check" /> :  <i class='bx bx-x' ></i> }
      </span>
    </li>
  );
};

export default PricingCardFeature;
