import React from "react";
import PricingCard from "../../../components/PricingCard/PricingCard";
import PricingCardFeature from "../../../components/PricingCard/PricingCardFeature";
import ResponsiveMenu from "../../../components/ResponsiveMenu/ResponsiveMenu";
import TabsContent from "../../../components/TabsSlideContent/TabsContent";
import "./SIPricingStyles.scss";
const SIPricingScreen = () => {
  return (
    <>
    <ResponsiveMenu/>
    <div className="si-pricing">
      <div className="si-pricing__content">
        <div className="si-pricing__content-banner">
          <h1>
            A range of price plans available for all different types of clubs.
            <span>
              No pressure, you can start with the free plan and easily upgrade
              when you need to.
            </span>
          </h1>
        </div>
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
              <PricingCardFeature featureTitle="Email Support" status={true} />
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
        <div className="si-pricing-fullDetails">
          <div className="si-pricing__content-banner alt">
            <h1>
              Pricing Details
              <span>Full plan breakdown. Everything you need to know</span>
            </h1>
          </div>
          <TabsContent/>
        </div>
      </div>
    </div>
    </>
  );
};

export default SIPricingScreen;
