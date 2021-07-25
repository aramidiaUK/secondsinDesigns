import React, { useState } from "react";
import FormInput from "../../../../components/FormInput/FormInput";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import "../Register/SIRegisterStyles.scss";
import "./SIForgotPassword.scss"
const SIForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="si-register fp">
      <ResponsiveMenu/>
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1>
            Forgot your password?{" "}
            <span className="sub-text">
              Not a problem, get back into your account in a matter of minutes{" "}
            </span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <FormInput
              initialValue={email}
              type="email"
              labelFor="email"
              labelName="Email"
              change={e => {
                setEmail(e.target.value);
              }}
              placeholder="richard.jones@email.com"
              additional={{
                required: true
              }}
            />
            <div className="form-group">
              <button className="btn ripple">Send Password Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIForgotPassword;
