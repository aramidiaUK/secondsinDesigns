import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import DisplayedFooter from "../../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../../components/ClubNavbar/ClubNavbar";
import VideoPlayer from "../../../../components/VideoPlayer/VideoPlayer";

const ClubVideos = () => {
  return (
    <div className="club">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <VideoPlayer />
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubVideos;
