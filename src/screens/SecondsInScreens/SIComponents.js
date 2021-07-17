import React from "react";
import DashboardBody from "../../components/adminDashboard/DashboardBody";
import CarouselBody from "../../components/CarouselDesign/CarouselBody";
import CommentBody from "../../components/commentsDesign/CommentBody";
import FoldOutCardsBody from "../../components/foldOutCards/FoldOutCardsBody";
import GlassCardsBody from "../../components/glassCards/GlassCardsBody";
import MegaMenuAltBody from "../../components/megaMenuDesign/MegaMenuAltBody";
import MegaMenuBody from "../../components/megaMenuDesign/MegaMenuBody";
import SideMenu from "../../components/navigationMenu/SideMenu";
import SideMenuAlt from "../../components/navigationMenu/SideMenuAlt";
import ProCardsBody from "../../components/proCards/ProCardsBody";
import RippleButtonsBody from "../../components/RippleButtons/RippleButtonsBody";
import SwipingCardsBody from "../../components/swiperCards/SwipingCardsBody";

const SIComponents = () => {
  return (
    <div className="components">
      <SideMenu />
      <SideMenuAlt />
      <DashboardBody />
      <SwipingCardsBody />
      <ProCardsBody />
      <GlassCardsBody />
      <FoldOutCardsBody />
      <RippleButtonsBody />
      <CommentBody />
      <CarouselBody />
      <MegaMenuBody />
      <MegaMenuAltBody />
    </div>
  );
};

export default SIComponents;
