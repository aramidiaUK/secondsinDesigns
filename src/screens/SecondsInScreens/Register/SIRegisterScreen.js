import React, { useState } from "react";
import "./SIRegisterStyles.scss";
import FormInput from "../../../components/FormInput/FormInput";
import DateEntry from "../../../components/DateEntryInput/DateEntry";
import PasswordInput from "../../../components/PasswordStrengthChecker/PasswordInput";
import { NavLink } from "react-router-dom";
import CustomCheckbox from "../../../components/CheckboxDesign/CustomCheckbox";
import ToastMessage from "../../../components/ToastMessage/ToastMessage";
const SIRegisterScreen = () => {
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dayDob, setDayDob] = useState(1);
  const [monthDob, setMonthDob] = useState(0);
  const [yearDob, setYearDob] = useState(1960);
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="si-register">
      <ToastMessage
        show={true}
        type="success"
        textHeader={"Registration Completed"}
        textBody={"You have successfully registered"}
      />
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1>
            Welcome to SecondsIn.{" "}
            <span className="sub-text">
              Subscribe to clubs. Create content. Manage your club. Build your
              brand. Do it all here with SecondsIn sports platform. Already have
              an account? <NavLink to="/login">Log in</NavLink>{" "}
            </span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <div className="split-group">
              <FormInput
                initialValue={forename}
                type="text"
                labelFor="forname"
                labelName="Forename"
                placeholder="Richard"
                change={e => {
                  setForename(e.target.value);
                }}
                additional={{ required: true }}
              />
              <FormInput
                initialValue={surname}
                type="text"
                labelFor="surname"
                labelName="Surname"
                placeholder="Jones"
                change={e => {
                  setSurname(e.target.value);
                }}
                additional={{ required: true }}
              />
            </div>
            <FormInput
              initialValue={email}
              type="email"
              labelFor="email"
              labelName="Email"
              change={e => {
                setEmail(e.target.value);
              }}
              placeholder="richard.jones@email.com"
              additional={{ required: true }}
            />
            <div className="split-group">
              <FormInput
                initialValue={phone}
                type="tel"
                labelFor="phone"
                labelName="Phone"
                placeholder="+4475....."
                change={e => {
                  setPhone(e.target.value);
                }}
                additional={{ required: true }}
              />
              <DateEntry
                labelName="Date of birth"
                day={dayDob}
                setDay={setDayDob}
                month={monthDob}
                setMonth={setMonthDob}
                year={yearDob}
                setYear={setYearDob}
              />
            </div>
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
                additional={{ required: true }}
              />
              <FormInput
                initialValue={retypedPassword}
                type="password"
                labelFor="retypedPassword"
                labelName="Retype Password"
                change={e => {
                  setRetypedPassword(e.target.value);
                }}
                placeholder="Enter password again"
                additional={{ required: true }}
              />
            </div>
            <div className="split-group form-options">
              <button type="submit" className="btn">
                Sign Up
              </button>
              <div className="check-item">
                <CustomCheckbox labelState={marketing} setLabelState={setMarketing} 
                labelText={"I don't want to receive updates from SecondsIn related to new clubs, unsubscribed clubs content, feature updates and promotions."} labelId="marketing-check" />
              </div>
            </div>
          </form>
          <span className="form-terms">By clicking the "Sign Up" button, you are creating a SecondsIn account, and you agree to SecondsIn's <NavLink to="/">Terms of Use</NavLink> and <NavLink to="/">Privacy Policy.</NavLink></span>
        </div>
        <div className="si-register__content-imgFrame">
          <img src="./assets/images/rugby.jpg" alt="multi-sport" />
        </div>
      </div>
    </div>
  );
};

export default SIRegisterScreen;
