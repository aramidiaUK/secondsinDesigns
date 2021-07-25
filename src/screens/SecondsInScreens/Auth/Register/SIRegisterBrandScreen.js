import React, { useState } from "react";
import FormInput from "../../../../components/FormInput/FormInput";
import "./SIRegisterStyles.scss";
import "./SIRegisterBrandStyles.scss";

import { sports } from "../../../../data/sports";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import ThemeBrandPreview from "../../../../components/ThemeComponents/ThemeBrandPreview/ThemeBrandPreview";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";
const SIRegisterBrandScreen = () => {
  const [type, setType] = useState("");
  const [teamName, setTeamName] = useState("");
  const [shortenedName, setShortenedName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [clubId, setClubId] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const [imagePath, setImagePath] = useState("");
  const [cropResult, setCropResult] = useState("");

  return (
    <div className="brand si-register">
      <ResponsiveMenu classAddin="register" />
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1 className="brand-header">
            Your Club, Sport and Brand.{" "}
            <span className="sub-text">
              Distinguish your club from the others. Add you club details and
              logo.{" "}
            </span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <div className="split-group split-group-3">
              <CustomSelect
                labelText={"Sport Type"}
                labelFor={"sport"}
                selectedState={type}
                setSelectedState={setType}
                options={sports}
              />
              <FormInput
                initialValue={teamName}
                type="text"
                labelFor="shortName"
                labelName="Full Team Name"
                placeholder="SecondsIn United"
                change={e => {
                  setTeamName(e.target.value);
                }}
                additional={{ required: true }}
              />
              <FormInput
                initialValue={shortenedName}
                type="text"
                labelFor="abbrName"
                labelName="Shortened Name"
                placeholder="SUFC"
                change={e => {
                  setShortenedName(e.target.value);
                }}
                additional={{ required: true }}
              />
            </div>
            <FormInput
              initialValue={slogan}
              type="text"
              labelFor="slogan"
              labelName="Team Slogan"
              change={e => {
                setSlogan(e.target.value);
              }}
              placeholder="Seconds to get your club app up and running..."
              additional={{ required: true }}
            />
            <div className="split-group split-group-3">
              <FormInput
                initialValue={country}
                type="text"
                labelFor="country"
                labelName="Country"
                placeholder="United Kingdom"
                change={e => {
                  setCountry(e.target.value);
                }}
                additional={{ required: true }}
              />
              <FormInput
                initialValue={city}
                type="text"
                labelFor="city"
                labelName="City"
                placeholder="London"
                change={e => {
                  setCity(e.target.value);
                }}
                additional={{ required: true }}
              />
              <FormInput
                initialValue={postcode}
                type="text"
                labelFor="postcode"
                labelName="Post Code"
                placeholder="NW1..."
                change={e => {
                  setPostcode(e.target.value);
                }}
                additional={{ required: true }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imagelink">Club Logo</label>
              <div className="input-addon">
                <input
                  value={imagePath && imagePath.lg}
                  type="url"
                  className="form-text-entry upload-addon"
                  placeholder="https:\\www.image-link.com\image.png"
                  onChange={e => setImagePath(e.target.value)}
                  disabled={cropResult}
                />
                <label htmlFor="uploadImage" className="btn addon-upload">
                  Click to upload image
                </label>
                <input
                  type="file"
                  className="addon-applied"
                  id="uploadImage"
                  onChange={e => e.preventDefault()}
                />
              </div>
            </div>

            <ThemeBrandPreview />
            <div className="split-group form-options">
              <NavLink to="/register" className="btn">
                <i class="bx bx-left-arrow-alt" />
                Previous
              </NavLink>
              <NavLink to="/register-theme" className="btn">
                Next
                <i class="bx bx-right-arrow-alt" />
              </NavLink>
            </div>
          </form>
        </div>
        <div className="si-register__content-imgFrame">
          <img src="./assets/images/football-2.jpg" alt="multi-sport" />
        </div>
      </div>
    </div>
  );
};

export default SIRegisterBrandScreen;
