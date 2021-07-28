import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ADCard from "../../../components/Cards/ADCard/ADCard";
import ClubNavCard from "../../../components/Cards/ClubNavCard/ClubNavCard";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import ClubContentRow from "../../../components/ClubContentRow/ClubContentRow";
import ClubFooter from "../../../components/ClubFooter/ClubFooter";
import ClubFooterLinksGroup from "../../../components/ClubFooter/ClubFooterLinksGroup";
import ClubFooterLinksGroupItem from "../../../components/ClubFooter/ClubFooterLinksGroupItem";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import ClubSubscribePanel from "../../../components/ClubSubscribePanel/ClubSubscribePanel";
import ThemeFooterSponsorItem from "../../../components/ThemeComponents/ThemeFooterPreview/ThemeFooterSponsorItem";
import ThemedNavbar from "../../../components/ThemeComponents/ThemeNavbarPreview/ThemedNavbar";
import ThemeNavbarItem from "../../../components/ThemeComponents/ThemeNavbarPreview/ThemeNavbarItem";
import Ticker from "../../../components/Ticker/Ticker";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import "./ClubHomeStyles.scss";
const ClubHome = () => {
  useEffect(() => {
    const lockNavbar = () => {
      const clubBody = document.querySelector(".club");
      const nav = document.querySelector(".themed-nav");
      let scrollHeight = clubBody.scrollY;

      console.log(scrollHeight);
      nav && scrollHeight >= 150 && nav.classList.add("scroll");
      nav && scrollHeight < 150 && nav.classList.remove("scroll");
    };

    lockNavbar();
  }, []);
  return (
    <div className="club">
      <ClubNavbar/>
      <div
        className="club-carousel"
        onMouseOver={e => (e.currentTarget.style.zIndex = 1)}
        onMouseLeave={e => (e.currentTarget.style.zIndex = 0)}
      >
        <div className="club-carousel-item active">
          <img src="/assets/images/fans.jpeg" alt="gameplay" />
          <div className="club-carousel-item-content">
            <div className="club-carousel-item-content-textBox">
              <h1>Manchester united agree a deal for young striker...</h1>
              <div className="club-carousel-item-content-textBox-buttonHold">
                <NavLink to="/" className="btn">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClubSubscribePanel clubName="Manchester United" />
      <div className="mid">
        <ClubContentRow
          header="News"
          subHeader={"Recent news"}
          parentClass={"news"}
        >
          <ADCard
            backdropImageLink={"/assets/images/basketballStadium.jpg"}
            brandImageLink={"/assets/images/klutchSponsorship.jpeg"}
            caption={"Game Time"}
            buttonText={"Download App"}
          />
          <NewsCard
            post={{
              title: "Example news card - new club added to the S...",
              shortDescription:
                "In publishing and graphic des ign, Lorem ipsum may be used as a placeholder before final copy is available.",
              imageLink: "/assets/images/football.jpg",
              type: "News",
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager"
                }
              }
            }}
          />
          <NewsCard
            post={{
              title: "Example news card - new club added to the S...",
              shortDescription:
                "In publishing and graphic des ign, Lorem ipsum may be used as a placeholder before final copy is available.",
              imageLink: "/assets/images/rugby.jpg",
              type: "News",
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager"
                }
              }
            }}
          />
          <NewsCard
            post={{
              title: "Example news card - new club added to the S...",
              shortDescription:
                "In publishing and graphic des ign, Lorem ipsum may be used as a placeholder before final copy is available.",
              imageLink: "/assets/images/affootball.jpg",
              type: "News",
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager",
                  imageLink: "/assets/images/person1.jpeg"
                }
              }
            }}
          />
          <NewsCard
            classAddin="wide"
            post={{
              title: "Example news card - new club added to the S...",
              shortDescription:
                "In publishing and graphic des ign, Lorem ipsum may be used as a placeholder before final copy is available.",
              imageLink: "/assets/images/basketball.jpg",
              type: "News",
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager"
                }
              }
            }}
          />
          <ADCard
            backdropImageLink={"/assets/images/fans.jpeg"}
            brandImageLink={"/assets/images/espnSponsor.png"}
            caption={"Best place to watch live sports"}
            buttonText={"View Now"}
          />
          <ClubNavCard text="See More News"/>
        </ClubContentRow>
       <VideoPlayer/>
      </div>
      <DisplayedFooter/>
    </div>
  );
};

export default ClubHome;
