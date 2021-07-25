import React from "react";
import { NavLink } from "react-router-dom";
import PricingCard from "../../../components/PricingCard/PricingCard";
import PricingCardFeature from "../../../components/PricingCard/PricingCardFeature";
import ResponsiveMenu from "../../../components/ResponsiveMenu/ResponsiveMenu";
import SIFooter from "../../../components/SIFooter/SIFooter";
import "./SIAboutStyles.scss";
const SIAboutScreen = () => {
  return (
    <div className="si-about">
      <ResponsiveMenu />
      <div className="si-about__content">
        <div className="si-about__content-banner">
          <div className="si-about__content-banner-content">
            <h1>
              Sports and Content Management. Create a Custom web app for your
              club and your fans.{" "}
              <span>
                Create a beautiful app that fits your clubs style. Manage your
                staff your teams, players, schedule and sponsors all in one
                place.
              </span>
            </h1>
            <div className="imgRow flex">
              <div className="column">
                <div className="imageBox">
                  <img src="./assets/images/multiSports-min.jpg" alt="footie" />
                </div>
                <div className="imageBox">
                  <img src="./assets/images/football-2.jpg" alt="footie" />
                </div>
                <div className="imageBox">
                  <img src="./assets/images/basketball.jpg" alt="footie" />
                </div>
              </div>
              <div className="column">
                <div className="imageBox">
                  <img src="./assets/images/rugby.jpg" alt="footie" />
                </div>
                <div className="imageBox">
                  <img src="./assets/images/affootball.jpg" alt="footie" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="si-about__content-banner alt">
          <div className="si-about__content-banner-content">
            <div className="imageBox">
              <img src="./assets/images/world.png" alt="world"/>
            </div>
            <div className="si-about__content-banner-content">
              <h1>
                <span>
                  Find out what content your supporters like to see the most,
                  with built in stats for each of your posts. See what countries
                  you are reaching, get to know your audience.
                </span>
                Reach Supporters And Members From Around The Globe.{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="si-about__content-banner dark">
          <div className="si-about__content-banner-content">
            <div className="si-about__content-banner-content">
              <h1>
                We are all content creators. Sign up today - It's FREE.{" "}
                <span>
                  No Club required, membership is <strong>free</strong>. You can
                  subscribe to your favourite clubs, give feedback on clubs
                  content and apply for multiple club positions. The
                  opportunities are endless, create your own use case.
                </span>
              </h1>
              <div className="membership-widget">
                <NavLink to="/pricing" className="btn ripple">See Pricing</NavLink>
              <div className="si-pricing__content-plans">
                <div className="si-pricing__content-plans-container">
                  <PricingCard
                    currencySymbol="£"
                    price="0"
                    packageName="Free"
                    primaryColor={`var(--SISuccessColor)`}
                  >
                    <PricingCardFeature
                      featureTitle="Free custom template"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Fully esponsive design"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Club management"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Email Support"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Unlimited teams"
                      status={false}
                    />
                  </PricingCard>
                  <PricingCard
                    currencySymbol="£"
                    price="29"
                    packageName="Premium"
                    primaryColor={`var(--SISecondaryColor)`}
                    ribbon={true}
                    ribbonText={"Recommend"}
                  >
                    <PricingCardFeature
                      featureTitle="Everything in Free Plan"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Custom Sponsors"
                      status={true}
                    />
                    <PricingCardFeature featureTitle="Club Ads" status={true} />
                    <PricingCardFeature
                      featureTitle="List Club Opportunities"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Lineup Import/Export"
                      status={false}
                    />
                  </PricingCard>
                  <PricingCard
                    currencySymbol="£"
                    price="59"
                    packageName="VIP"
                    primaryColor={`var(--SIAltColor)`}
                  >
                    <PricingCardFeature
                      featureTitle="Everything in Premium Plan"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Custom Domain (Soon)"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Account Manager"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Free Technical Support"
                      status={true}
                    />
                    <PricingCardFeature
                      featureTitle="Uncapped Opportunity Listings"
                      status={true}
                    />
                  </PricingCard>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <SIFooter/>
    </div>
  );
};

export default SIAboutScreen;
