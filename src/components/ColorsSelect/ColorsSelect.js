import React, { useState } from "react";
import { BlockPicker } from 'react-color';
import "./ColorsSelect.scss";
const ColorSelect = ({ labelText, name, color, setColor, subTitle }) => {
  
  const [showPicker, setShowPicker] = useState(false);

  const showColorPicker  =  () => {
    setShowPicker(showPicker ? false : true);
  }

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
                backgroundColor: `${(color && (color?.hex || color)) || '#000'}`
              }}
            />
            <span className="color-name">
              {`${(color && (color?.hex || color)) || '#000'}`}
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => { showColorPicker() }}
        >
          Select
        </button>
        <div className="block-picker-container" style={{display: `${showPicker ? 'flex' : 'none'}`}}>
          <BlockPicker color={color} onChangeComplete={setColor}/> 
        </div>
      </div>
    </div>
  );
};

export default ColorSelect;
