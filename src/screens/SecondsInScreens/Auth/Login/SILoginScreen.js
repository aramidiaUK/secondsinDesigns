import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomCheckbox from "../../../../components/CheckboxDesign/CustomCheckbox";
import FormInput from "../../../../components/FormInput/FormInput";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import SIFooter from "../../../../components/SIFooter/SIFooter";
import "./SILoginStyles.scss";

const SILoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [labelState, setLabelState] = useState(false);

  return (
    <div className="si-login">
      <ResponsiveMenu classAddin="register"/>
      <div className="si-login__content">
        <div className="si-login__content-formArea">
          <h1>
            Log In<span className="sub-text">Need a SecondsIn account?{" "}
            <NavLink to="/register">Create an account</NavLink>{" "}</span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <FormInput
              type="email"
              labelName="Email address"
              labelFor="email"
              placeholder="john_smith@email.com"
              change={e => {
                setEmail(e.target.value);
              }}
              initialValue={email}
              additional={{ required: true }}
            />
            <FormInput
              type="password"
              labelName="Password"
              labelFor="password"
              placeholder="**********!"
              change={e => {
                setPassword(e.target.value);
              }}
              additional={{ required: true }}
            />
            <div className="form-group">
              <button type="submit" className="btn">
                Log In
              </button>
            </div>
            <div className="alt-options">
              <div className="check-item">
                <CustomCheckbox labelState = {labelState} setLabelState={setLabelState} labelText={'Keep me logged in'} labelId="login-check" />
              </div>
              <div className="fp-content">
                <NavLink to="/forgot-password">Forgot password?</NavLink>
              </div>
            </div>
          </form>
          <SIFooter/>
        </div>
        <div className="si-login__content-imgFrame">
          <img src="./assets/images/fans.jpeg" alt="multi-sport" />
        </div>
      </div>
    </div>
  );
};

export default SILoginScreen;
