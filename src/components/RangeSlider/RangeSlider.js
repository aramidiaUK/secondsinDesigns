import React from "react";
import "./RangeSlider.scss"
const RangeSlider = ({ range, setRange, min, max, step }) => {
  return (
    <div className="rangeSlider-container">
      <input
        type="range"
        min={min || 0}
        max={max || 100}
        step={step}
        class="slider"
        value={range}
        onChange={e => setRange(e.currentTarget.value)}
      />
    </div>
  );
};

export default RangeSlider;
