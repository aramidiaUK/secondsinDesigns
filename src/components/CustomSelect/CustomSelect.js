import React, { useState } from "react";
import Select from "react-select";
import "./CustomSelect.scss";
const CustomSelect = ({
  selectedState,
  setSelectedState,
  options,
  additionalStyles,
  labelFor,
  labelText
}) => {
  const handleChange = selectedOption => {
    setSelectedState( selectedOption );
  };

  const standardStyles = {
    control: styles => ({
      ...styles,
      ...additionalStyles,
      minWidth: "200px",
      backgroundColor: "white",
      borderRadius: "var(--SIborder-radius)",
      height: "48px",
      border: "2px solid",
      borderColor: '#e1e1e1',
      outline: "none",
      marginTop: "4px",
      color: "#343434",
      fontSize: '16px',
      lineHeight: '24px'
    })

  };

  return (
    <div className="form-group custom-hold">
       <label htmlFor={labelFor}>{labelText}</label>
      <Select
        id={labelFor}
        value={selectedState}
        onChange={handleChange}
        options={options}
        styles={standardStyles}
        className="react-select"
      />
    </div>
  );
};

export default CustomSelect;
