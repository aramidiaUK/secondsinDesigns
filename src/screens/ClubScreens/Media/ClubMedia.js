import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import ClubVideosTop from "./ClubVideos/ClubVideosTop";
import "./ClubMediaStyles.scss";
import ClubMediaMenu from "./ClubMediaMenu";
import VideoCard from "../../../components/Cards/VideoCard/VideoCard";
import ClubContentRow from "../../../components/ClubContentRow/ClubContentRow";
import { NavLink } from "react-router-dom";
import ImagesCard from "../../../components/Cards/ImagesCard/ImagesCard";

const ClubMedia = () => {
  return (
    <div className="club media">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <ClubMediaMenu />
        <ClubVideosTop />
        <ClubContentRow parentClass="news" classAddin="media-mid-row">
          <VideoCard
            backdropImageLink={"/assets/images/affootball-2.jpg"}
            sponsorImageLink={"/assets/images/espnSponsor.png"}
            caption={"A great goal from Sanchez on his debut"}
            post={{
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager",
                  imageLink: "/assets/images/person1.jpeg"
                }
              }
            }}
          />
          <VideoCard
            backdropImageLink={"/assets/images/basketball.jpg"}
            sponsorImageLink={"/assets/images/rocnationSponsor.jpeg"}
            caption={"What a block from mbid!!"}
            post={{
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager"
                }
              }
            }}
          />
          <VideoCard
            backdropImageLink={"/assets/images/rugby.jpg"}
            sponsorImageLink={"/assets/images/rugbySponsor.png"}
            caption={"Kick from 45 yards, and thats it"}
            post={{
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager",
                  imageLink: "/assets/images/person2.jpeg"
                }
              }
            }}
          />
          <VideoCard
            backdropImageLink={"/assets/images/basketball-2.jpg"}
            sponsorImageLink={"/assets/images/nba.png"}
            caption={"Amazing 360 Dunk by LBJ"}
            post={{
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager",
                  imageLink: "/assets/images/person2.jpeg"
                }
              }
            }}
          />
          <div className="quick-link-item">
            <div className="quick-link-item__content">
              <NavLink to="/club/media/videos">
                <span>Go To Videos Page</span> <i class="bx bx-chevron-right" />
              </NavLink>
            </div>
          </div>
        </ClubContentRow>
        <ClubContentRow
          columns="row-6"
          header={"Photos"}
          subHeader={"Club Images"}
        >
          <ImagesCard
            imageLink="/assets/images/lakers.png"
            header="Bootcamp sessions"
            dateSince="1 Week ago"
            imagesArray={[
              "/assets/images/lakers.png",
              "/assets/images/mutdStadium.jpg",
              "/assets/images/nike-logo.png",
              "/assets/images/d_wade.jpg",
              "/assets/images/football-2.jpg"
            ]}
          />
          <ImagesCard
            imageLink="/assets/images/gameplay.jpeg"
            header="Getting ready for the season to start"
            dateSince="2 Week ago"
            imagesArray={[
              "/assets/images/gameplay.jpeg",
              "/assets/images/rugby.jpg",
              "/assets/images/affootball.jpg",
              "/assets/images/multiSports-min.jpg",
              "/assets/images/football-2.jpg"
            ]}
          />
          <ImagesCard
            imageLink="/assets/images/nba.png"
            header="Great training session with the youth team"
            dateSince="1 Week ago"
            imagesArray={[
              "/assets/images/nba.png",
              "/assets/images/nflsponsor.png",
              "/assets/images/fa.jpeg",
              "/assets/images/chelsea__logo.png",
              "/assets/images/football.jpg"
            ]}
          />
        </ClubContentRow>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubMedia;
