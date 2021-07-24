import React, { useState } from "react";
import DashboardBody from "../../components/AdminDashboard/DashboardBody";
import CarouselBody from "../../components/CarouselDesign/CarouselBody";
import CommentBody from "../../components/CommentsDesign/CommentBody";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import FoldOutCardsBody from "../../components/FoldOutCards/FoldOutCardsBody";
import GlassCardsBody from "../../components/GlassCards/GlassCardsBody";
import MegaMenuAltBody from "../../components/MegaMenuDesign/MegaMenuAltBody";
import MegaMenuBody from "../../components/MegaMenuDesign/MegaMenuBody";
import SideMenu from "../../components/NavigationMenu/SideMenu";
import SideMenuAlt from "../../components/NavigationMenu/SideMenuAlt";
import ProCardsBody from "../../components/ProCards/ProCardsBody";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import RippleButtonsBody from "../../components/RippleButtons/RippleButtonsBody";
import SwipingCardsBody from "../../components/SwiperCards/SwipingCardsBody";
import { colors } from "../../data/colors";

const SIComponents = () => {
  const [selectedColor, setSelectedColor] = useState("");
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
      <RangeSlider/>
      <CustomSelect options={colors} selectedState={selectedColor} setSelectedState={setSelectedColor} />
    </div>
  );
};

export default SIComponents;
