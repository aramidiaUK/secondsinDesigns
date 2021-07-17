import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormInput from "../../../components/FormInput/FormInput";

const SILoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="si-login">
      <div className="si-login__content">
        <div className="si-login__content-formArea">
          <form className="si-login__form">
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
              children={
                <NavLink to="/forgot-password" className="fp-link">
                  Forgot Password
                </NavLink>
              }
            />
          </form>
        </div>
        <div className="si-login__imageFrame" />
      </div>
    </div>
  );
};

export default SILoginScreen;
