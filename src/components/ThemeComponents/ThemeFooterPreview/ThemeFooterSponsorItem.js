import React from "react";

const ThemeFooterSponsorItem = ({ linkTo, image, alt }) => {
  return (
    <li>
      <a href={linkTo || '/'}>
        <img src={image} alt={alt || "sponsor"} />
      </a>
    </li>
  );
};

export default ThemeFooterSponsorItem;
