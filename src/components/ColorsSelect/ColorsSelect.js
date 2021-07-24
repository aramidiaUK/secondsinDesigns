import React from "react";
import "./ColorsSelect.scss";
const ColorSelect = ({ labelText, name, color, setColor, subTitle }) => {
  return (
    <div className="form-group">
      <label>
        {labelText}
      </label>
      <div className="color-select">
        <div className="color">
          <p>
            <span
              className="color-preview"
              style={{
                backgroundColor: "rgba(0,0,0)"
              }}
            />
            <span className="color-name">
              {"Black"}
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={e => e.preventDefault()}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ColorSelect;
