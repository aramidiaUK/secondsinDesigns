import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
const Breadcrumbs = () => {
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;
  const pathnames = pathname.split("/club/").filter(x => x);

  console.log(pathnames);
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__content">
        <NavLink to={`/club/home`}>Home</NavLink>
        {pathnames.map((name, index) => {
          const routeTo = `/club/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <NavLink className="breadcrumb__content-link" key={index} to={routeTo}>
              {name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
