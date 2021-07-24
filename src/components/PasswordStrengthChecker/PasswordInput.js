import React, { useState } from "react";
import "./PasswordInputStyles.scss";

const PasswordInput = ({
  labelName,
  labelFor,
  change,
  placeholder,
  additional,
  initialValue
}) => {
  const [passwordStatus, setPasswordStatus] = useState("");
  const [showBtnText, setShowBtnText] = useState("show");
  const passwordChecker = e => {
    const indicator = document.querySelector(".si-password__indicator");
    const container = document.querySelector(".si-password__container");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".si-password__indicator-text");
    const showPasswordBtn = document.querySelector(".si-password__showBtn");
    let no = 1;

    let regExpWeak = /[a-z]/;
    let regExpMedium = /[0-9]/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if (e.currentTarget.value.length > 0 && e.currentTarget.value !== "") {
      container.style.height = "142px";
      indicator.style.opacity = 1;
      text.style.opacity = 1;
      showPasswordBtn.style.opacity = 1;

      if (
        (e.currentTarget.value.length <= 3 &&
          e.currentTarget.value.match(regExpWeak)) ||
        e.currentTarget.value.match(regExpMedium) ||
        e.currentTarget.value.match(regExpStrong)
      )
        no = 1;

      if (
        e.currentTarget.value.length >= 8 &&
        ((e.currentTarget.value.match(regExpWeak) &&
          e.currentTarget.value.match(regExpMedium)) ||
          (e.currentTarget.value.match(regExpMedium) &&
            e.currentTarget.value.match(regExpStrong)) ||
          (e.currentTarget.value.match(regExpWeak) &&
            e.currentTarget.value.match(regExpStrong)))
      )
        no = 2;

      if (
        e.currentTarget.value.length >= 8 &&
        e.currentTarget.value.match(regExpWeak) &&
        e.currentTarget.value.match(regExpMedium) &&
        e.currentTarget.value.match(regExpStrong)
      )
        no = 3;

      console.log(no);
      if (no === 1) {
        weak.classList.add("active");
        text.classList.add("active");
        text.classList.add("weak");
        setPasswordStatus("Your password is too weak");
      } else {
        text.classList.remove("weak");
      }

      if (no === 2) {
        medium.classList.add("active");
        text.classList.add("medium");
        setPasswordStatus("Try also adding a special character");
      } else {
        medium.classList.remove("active");
        text.classList.remove("medium");
      }

      if (no === 3) {
        medium.classList.add("active");
        strong.classList.add("active");
        text.classList.add("strong");
        setPasswordStatus("Your password is secure");
      } else {
        strong.classList.remove("active");
        text.classList.remove("strong");
      }
    } else {
      container.style.height = "95px";
      indicator.style.opacity = 0;
      text.style.opacity = 0;
      showPasswordBtn.style.opacity = 0;
    }
  };

  const showPassword = () => {
    const passwordInput = document.querySelector("#password");

    if (passwordInput.type === "password") {
      document.querySelector("#password").type = "text";
      setShowBtnText("HIDE");
    } else {
      document.querySelector("#password").type = "password";
      setShowBtnText("SHOW");
    }
  };

  return (
    <div className="si-password__container">
      <div className={`form-group`}>
        <label htmlFor={labelFor}>
          {labelName}
        </label>
        <input
          id={labelFor}
          type={"password"}
          value={initialValue}
          className="form-text-entry"
          placeholder={placeholder}
          onChange={change}
          {...additional}
          onKeyUp={passwordChecker}
        />
        <span className="si-password__showBtn" onClick={showPassword}>
          {showBtnText}
        </span>
      </div>
      <div className="si-password__indicator">
        <span className="weak" />
        <span className="medium" />
        <span className="strong" />
      </div>
      <div className="si-password__indicator-text">
        {passwordStatus}
      </div>
    </div>
  );
};

export default PasswordInput;
