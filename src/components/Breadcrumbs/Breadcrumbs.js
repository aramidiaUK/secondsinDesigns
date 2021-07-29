import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
const Breadcrumbs = () => {
  const location = useLocation();

  const { pathname } = location;
  let pathnames = pathname.split("/").filter(x => x);

  return (
    <div className="breadcrumb">
      <div className="breadcrumb__content">
        <NavLink to={`/club/home`}>Home</NavLink>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <>
            { name !== 'club' &&
            <NavLink className="breadcrumb__content-link" key={index} to={routeTo}>
              {name}
            </NavLink>
            }
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
