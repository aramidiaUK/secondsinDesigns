import React from 'react';
import './App.css';
import SideMenu from './components/navigationMenu/SideMenu';
import SwipingCardsBody from './components/swiperCards/SwipingCardsBody';
import ProCardsBody from './components/proCards/ProCardsBody';
import GlassCardsBody from './components/glassCards/GlassCardsBody';
import FoldOutCardsBody from './components/foldOutCards/FoldOutCardsBody';
import RippleButtonsBody from './components/RippleButtons/RippleButtonsBody';
import SideMenuAlt from './components/navigationMenu/SideMenuAlt';
import DashboardBody from './components/adminDashboard/DashboardBody';
import CommentBody from './components/commentsDesign/CommentBody';
import CarouselBody from './components/CarouselDesign/CarouselBody';
import MegaMenuBody from './components/megaMenuDesign/MegaMenuBody';

function App() {
  return (
    <div className="App">
      <div className="components">
        <SideMenu/>
        <SideMenuAlt/>
        <DashboardBody/>
        <SwipingCardsBody/>
        <ProCardsBody/>
        <GlassCardsBody/>
        <FoldOutCardsBody/>
        <RippleButtonsBody/>
        <CommentBody/>
        <CarouselBody/>
        <MegaMenuBody/>
      </div>
    </div>
  );
}

export default App;
