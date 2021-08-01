import React from "react";
import { NavLink } from "react-router-dom";
import "./OpportunitiesCardStyles.scss";
const OpportunitiesCard = ({
  image,
  type,
  compensation,
  compensationType,
  header,
  body,
  position,
  dateSince,
  age,
  gender,
  height,
  linkTo,
  altLink
}) => {
  return (
    <div className="opportunities-card">
      <div className="opportunities-card__content">
        <div className={`tag ${compensationType}`}>
          {compensation}
        </div>
        <div className="opportunities-card__content-imageBox">
          <img src={image} alt="staff-brand" />
        </div>
        <div className="opportunities-card__content-info">
          <div className="opportunities-card__content-textContent">
            <h1>
              {header}
              <span>
                {dateSince}
              </span>
            </h1>
            <p>
              {body}
            </p>
            <div className="opportunities-card__content-textContent-details">
              <span className="position">
                <span title="position">
                  <i class="bx bx-buildings" />
                </span>{" "}
                {position}
              </span>
              <span className="age">
                <span title="age range">
                  <i class="bx bx-filter-alt" />
                </span>{" "}
                {age}
              </span>
              <span className="gender">
                <span title="gender">
                  <i class="bx bx-user-pin" />
                </span>{" "}
                {gender}
              </span>
              <span className="height">
                <span title="height">
                  <i class="bx bx-horizontal-center" />
                </span>{" "}
                {height}
              </span>
            </div>
          </div>
          <div className="opportunities-card__content-footer">
            <span>
              {type} Role
            </span>
            <div className="btn-group">
              <button type="button" className="btn quick-apply">
                Apply
              </button>
              {linkTo &&
                <NavLink to={linkTo} className="btn">
                  See More
                </NavLink>}
              {altLink &&
                <a href={altLink} className="btn">
                  See More
                </a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
