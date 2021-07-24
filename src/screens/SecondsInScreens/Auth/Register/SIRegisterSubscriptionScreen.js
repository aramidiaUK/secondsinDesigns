import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import "./SIRegisterStyles.scss";

const SIRegisterSubscriptionScreen = () => {
  return (
    <div className="subscription si-register">
      <ResponsiveMenu classAddin="register" />
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1 className="brand-header">
            Final Step.{" "}
            <span className="sub-text">
              Checkout information required to continue.{" "}
            </span>
          </h1>
          <form>
            <div className="split-group form-options">
              <NavLink to="/register-theme" className="btn">
                <i class="bx bx-left-arrow-alt" />
                Previous
              </NavLink>
              <NavLink to="/register-build" className="btn">
                Complete Setup
                <i class="bx bx-right-arrow-alt" />
              </NavLink>
            </div>
          </form>
        </div>
        <div className="si-register__content-imgFrame">
          <img src="./assets/images/basketball-2.jpg" alt="multi-sport" />
        </div>
      </div>
    </div>
  );
};

export default SIRegisterSubscriptionScreen;
