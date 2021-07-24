import React, { useEffect, useState } from "react";
import { imageError } from "../../../utils/helpers";
import "./ThemeBrandPreview.scss";
const ThemeBrandPreview = ({ loading, croppedResult, imageUploaded }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    (imageUploaded && imageUploaded.lg) || (croppedResult && croppedResult.lg)
      ? setImage(imageUploaded.lg || croppedResult.lg)
      : setImage(undefined);
  }, []);
  return (
    <div>
      {loading
        ? <span>Loading...</span>
        : <div className="theme-component branding">
            <div className="theme-component__content">
              <h3 className="theme-component-header">Logo Preview</h3>
              <div className="branding-preview">
                <div className="branding-lg">
                  <img
                    className="logo-mid"
                    src={image || `./assets/images/chelsea__logo.png`}
                    alt="logo"
                    title={"Your club logo large"}
                    onError={e => {
                      imageError(e, undefined);
                    }}
                  />
                </div>
                <div className="branding-mid">
                  <img
                    className="logo-mid"
                    src={image || `./assets/images/chelsea__logo.png`}
                    alt="logo"
                    title={"Your club logo medium"}
                    onError={e => {
                      imageError(e, undefined);
                    }}
                  />
                </div>
                <div className="branding-sm">
                  <img
                    className="logo-sm"
                    src={image || `./assets/images/chelsea__logo.png`}
                    alt="logo"
                    title={"Your club logo small"}
                    onError={e => {
                      imageError(e, undefined);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>}
    </div>
  );
};

export default ThemeBrandPreview;
