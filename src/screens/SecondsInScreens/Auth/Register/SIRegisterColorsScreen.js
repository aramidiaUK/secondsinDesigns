import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SIRegisterStyles.scss";
import "./SIRegisterColorsStyles.scss";
import BasicTabs from "../../../../components/BasicTabs/BasicTabs";
import BasicTabItem from "../../../../components/BasicTabs/BasicTabItem";
import BasicTabContent from "../../../../components/BasicTabs/BasicTabContent";
import ColorSelect from "../../../../components/ColorsSelect/ColorsSelect";
import ThemeColorPreview from "../../../../components/ThemeComponents/ThemeColorPreview/ThemeColorPreview";
import ThemeButtonPreview from "../../../../components/ThemeComponents/ThemeButtonsPreview/ThemeButtonPreview";
import ResponsiveMenu from "../../../../components/ResponsiveMenu/ResponsiveMenu";
import ThemeNavbarPreview from "../../../../components/ThemeComponents/ThemeNavbarPreview/ThemeNavbarPreview";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";
import ThemeFooterPreview from "../../../../components/ThemeComponents/ThemeFooterPreview/ThemeFooterPreview";
import ThemeCardPreview from "../../../../components/ThemeComponents/ThemeCardsPreview/ThemeCardPreview";
import RangeSlider from "../../../../components/RangeSlider/RangeSlider";

const SIRegisterColorsScreen = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [cardRadius, setCardRadius] = useState(0);
  const [buttonRadius, setButtonRadius] = useState(0);
  const [elementTransition, setElementTransition] = useState(.4);
  const [primaryButtonColor, setPrimaryButtonColor] = useState("");
  const [buttonFontColor, setButtonFontColor] = useState({
    value: "#FFF",
    label: "White (#FFF)"
  });
  const [navFontColor, setNavFontColor] = useState({
    value: "#FFF",
    label: "White (#FFF)"
  });
  const [navTextCasing, setNavTextCasing] = useState({
    value: "uppercase",
    label: "UPPERCASE"
  });
  const [showSponsors, setShowSponsors] = useState({
    value: "flex",
    label: "Yes"
  });
  const [footerLinksColor, setFooterLinksColor] = useState({
    value: "#FFF",
    label: "White (#FFF)"
  });
  const [footerLinksCasing, setFooterLinksCasing] = useState({
    value: "capitalize",
    label: "Capitalize"
  });
  const [pageLoading, setPageLoading] = useState(false);

  const [imagePath, setImagePath] = useState("");
  const [cropResult, setCropResult] = useState("");

  return (
    <div className="colors si-register">
      <ResponsiveMenu classAddin="register" />
      <div className="si-register__content">
        <div className="si-register__content-formArea">
          <h1>
            Your Apps Look and Feel.
            <span className="sub-text">
              Cant find your club color? Reach out to support and we will get it
              added for you.
            </span>
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <BasicTabs>
              <BasicTabItem id={"colorsTab"} tabName="Club Colors" />
              <BasicTabItem
                id={"navAndFooterTab"}
                tabName="Navbar &amp; Footer"
              />
              <BasicTabItem
                id={"cardsTransition"}
                tabName="Cards &amp; Transitions"
              />
            </BasicTabs>
            <BasicTabContent linkedTo="colorsTab">
              <div className="split-group">
                <ColorSelect
                  labelText="Primary Colour"
                  name="primaryColor"
                  color={primaryColor}
                  setColor={setPrimaryColor}
                  subTitle={"Select your primary club colours"}
                />
                <ColorSelect
                  labelText="Secondary Colour"
                  name="secondaryColor"
                  color={secondaryColor}
                  setColor={setSecondaryColor}
                  subTitle={"Select your secondary club colours"}
                />
              </div>
              <ThemeColorPreview
                secondaryColor={secondaryColor}
                primaryColor={primaryColor}
              />
              <div className="split-group">
                <ColorSelect
                  labelText="Primary Button Colour"
                  name="primaryButtonColor"
                  color={primaryButtonColor}
                  setColor={setPrimaryButtonColor}
                  subTitle={"Select your primary button colours"}
                />
                <CustomSelect
                  labelText={"Button text color"}
                  labelFor={"buttonTextColor"}
                  selectedState={buttonFontColor}
                  setSelectedState={setButtonFontColor}
                  options={[
                    { value: "#000", label: "Black (#000)" },
                    { value: "#FFF", label: "White (#FFF)" }
                  ]}
                />
                <div className="form-group">
                  <label>
                    Button radius{" "}
                    <span className="value">
                      {buttonRadius && `${buttonRadius}px`}
                    </span>
                  </label>
                  <RangeSlider
                    step={1}
                    min="0"
                    max="20"
                    range={buttonRadius}
                    setRange={setButtonRadius}
                  />
                </div>
              </div>
              <ThemeButtonPreview
                colorPrimary={primaryButtonColor}
                buttonTextColor={buttonFontColor}
                radiusSettings={buttonRadius}
              />
            </BasicTabContent>
            <BasicTabContent linkedTo="navAndFooterTab">
              <div className="split-group">
                <CustomSelect
                  labelText={"Navigation links color"}
                  labelFor={"navFontcolor"}
                  selectedState={navFontColor}
                  setSelectedState={setNavFontColor}
                  options={[
                    { value: "#000", label: "Black (#000)" },
                    { value: "#FFF", label: "White (#FFF)" }
                  ]}
                />
                <CustomSelect
                  labelText={"Text casing"}
                  labelFor={"textCasing"}
                  selectedState={navTextCasing}
                  setSelectedState={setNavTextCasing}
                  options={[
                    { value: "uppercase", label: "UPPERCASE" },
                    { value: "lowercase", label: "lowercase" },
                    { value: "capitalize", label: "Capitalize" }
                  ]}
                />
              </div>
              <ThemeNavbarPreview
                textCasing={navTextCasing}
                linkColors={navFontColor}
              />

              <div className="split-group">
                <CustomSelect
                  labelText={"Footer links color"}
                  labelFor={"footerLinksColor"}
                  selectedState={footerLinksColor}
                  setSelectedState={setFooterLinksColor}
                  options={[
                    { value: "#000", label: "Black (#000)" },
                    { value: "#FFF", label: "White (#FFF)" }
                  ]}
                />
                <CustomSelect
                  labelText={"Footer links text casing"}
                  labelFor={"footerCasing"}
                  selectedState={footerLinksCasing}
                  setSelectedState={setFooterLinksCasing}
                  options={[
                    { value: "uppercase", label: "UPPERCASE" },
                    { value: "lowercase", label: "lowercase" },
                    { value: "capitalize", label: "Capitalize" }
                  ]}
                />
                <CustomSelect
                  labelText={"Show Sponsors"}
                  labelFor={"showSponsors"}
                  selectedState={showSponsors}
                  setSelectedState={setShowSponsors}
                  options={[
                    { value: "none", label: "No" },
                    { value: "flex", label: "Yes" }
                  ]}
                />
              </div>
              <ThemeFooterPreview
                displaySponsors={showSponsors}
                navLinksCasing={footerLinksCasing}
                navLinksColor={footerLinksColor}
              />
            </BasicTabContent>
            <BasicTabContent linkedTo="cardsTransition">
              <div className="split-group">
                <div className="form-group">
                  <label>
                    Card radius{" "}
                    <span className="value">
                      {cardRadius && `${cardRadius}px`}
                    </span>
                  </label>
                  <RangeSlider
                    step={1}
                    min="0"
                    max="20"
                    range={cardRadius}
                    setRange={setCardRadius}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Image Transition speed{" "}
                    <span className="value">
                      {elementTransition && `${elementTransition}s`}
                    </span>
                  </label>
                  <RangeSlider
                    step={0.1}
                    min="0.1"
                    max="1"
                    range={elementTransition}
                    setRange={setElementTransition}
                  />
                </div>
              </div>
              <ThemeCardPreview
                radiusSettings={cardRadius}
                transitionSettings={elementTransition}
              />
            </BasicTabContent>
            <div className="split-group form-options">
              <NavLink to="/register-brand" className="btn">
                <i className="bx bx-left-arrow-alt" />
                Previous
              </NavLink>
              <NavLink to="/register-plan" className="btn">
                Next
                <i className="bx bx-right-arrow-alt" />
              </NavLink>
            </div>
          </form>
        </div>
        <div className="si-register__content-imgFrame">
          <img src="./assets/images/affootball.jpg" alt="multi-sport" />
        </div>
      </div>
    </div>
  );
};

export default SIRegisterColorsScreen;
