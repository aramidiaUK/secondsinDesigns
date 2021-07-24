import React, { useEffect, useState } from 'react'
import "./ThemeButtonPreview.scss";
const ThemeButtonPreview = ({colorPrimary, buttonTextColor, radiusSettings}) => {
    const [primary, setPrimary] = useState('grey');
    const [fontColor, setFontColor] = useState('');
    const [radius, setRadius] = useState('5px');
    
    useEffect(() => {
          setPrimary(colorPrimary && colorPrimary.value);
          setFontColor(buttonTextColor && buttonTextColor.value);
          setRadius(radiusSettings && `${radiusSettings}px`);

    },[colorPrimary, buttonTextColor, radiusSettings])

    const PrimaryStyles = {
      background: primary,
      color: fontColor,
      borderRadius: radius
    }

    return (
      <div className="theme-component alt buttons">
        <div className="theme-component__content">
          <h3 className="theme-component-header">Button Preview</h3>
            <div className="split-group">
            <button
                type="button"
                className={`btn bg-primary`}
                style={{...PrimaryStyles}}
            >
              Custom Button
            </button>
            <button
                type="button"
                className={`btn bg-primary`}
                style={{...PrimaryStyles}}
            >
              Custom Button
            </button>
            </div>
        </div>
      </div>
    )
}


export default ThemeButtonPreview
