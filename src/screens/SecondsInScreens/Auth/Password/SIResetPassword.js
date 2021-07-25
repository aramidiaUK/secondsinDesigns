import React, { useState } from "react";
import FormInput from "../../../../components/FormInput/FormInput";
import PasswordInput from "../../../../components/PasswordStrengthChecker/PasswordInput";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import "../Register/SIRegisterStyles.scss";
import "./SIResetPassword.scss"
const SIResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  return (
    <div className="si-register rp">
      <ResponsiveMenu />
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1>
            Reset your password.{" "}
            <span className="sub-text">
              Gain access to 100's of clubs / Manage your own club / Create
              opportunities.{" "}
            </span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <div className="split-group">
              <PasswordInput
                initialValue={password}
                type="password"
                labelFor="password"
                labelName="Password"
                change={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter password"
                additional={{
                  required: true,
                }}
              />
              <FormInput
                initialValue={confirmedPassword}
                type="password"
                labelFor="retypedPassword"
                labelName="Retype Password"
                change={e => {
                  setConfirmedPassword(e.target.value);
                }}
                placeholder="Enter password again"
                additional={{
                  required: true,
                }}
              />
            </div>
            <div className="form-group">
              <button className="btn ripple">Rest Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIResetPassword;
