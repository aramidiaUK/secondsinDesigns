import React from "react";
import './FormInputStyles.scss';
const FormInput = ({labelName, labelFor, type, change, placeholder, additional, initialValue, additionalStyles, children}) => {
  return (
    <div className={`form-group ${additionalStyles}`} >
      <label htmlFor={labelFor}>{labelName}</label>
      <input
        id={labelFor}
        type={type}
        value={initialValue}
        className="form-text-entry"
        placeholder={placeholder}
        onChange={change}
        {...additional}
      />
      {children}
    </div>
  );
};

export default FormInput;
