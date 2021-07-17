import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSidebarItem from "./DashboardSidebarItem";

import "./DashboardStyles.css";

const DashboardBody = () => {
  return (
    <div className="dashboard-body">
      <DashboardSidebar
        brandName={`Aramidia`}
        logoImage={false}
        logoIcon={false}
        onclick={(e) => e.preventDefault()}
        onsubmit={(e) => e.preventDefault()}
        imageLink={`./assets/images/gameplay.jpeg`}
        profileName={`Henry Akinola`}
        profileOcupation={`Software Developer`}
        logout={(e) => e.preventDefault()}
      >
        <DashboardSidebarItem linkTo={`/#`} linkName={`Dashboard`} boxIcon={[<i class='bx bx-grid-alt' ></i>]}/>
        <DashboardSidebarItem linkTo={`/#`} linkName={`Staff`} boxIcon={[<i class='bx bx-user-pin'></i>]}/>
        <DashboardSidebarItem linkTo={`/#`} linkName={`Players`} boxIcon={[<i class='bx bx-shield-alt-2'></i>]}/>
        <DashboardSidebarItem linkTo={`/#`} linkName={`Lineups`} boxIcon={[<i class='bx bx-circle' ></i>]}/>
        <DashboardSidebarItem linkTo={`/#`} linkName={`Content`} boxIcon={[<i class='bx bx-news' ></i>]}/>
      </DashboardSidebar>
      <div className="home_content">
          <div className="dashboard_content">
            <div className="text">Dashboard Content</div>
          </div>
      </div>
    </div>
  );
};

export default DashboardBody;
