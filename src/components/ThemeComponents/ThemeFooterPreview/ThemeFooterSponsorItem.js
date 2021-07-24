import React from "react";

const ThemeFooterSponsorItem = ({ image, alt }) => {
  return (
    <li>
      <a href="/">
        <img src={image} alt={alt || "sponsor"} />
      </a>
    </li>
  );
};

export default ThemeFooterSponsorItem;
