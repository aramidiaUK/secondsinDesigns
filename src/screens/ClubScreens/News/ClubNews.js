import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import ADCard from "../../../components/Cards/ADCard/ADCard";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import ClubContentRow from "../../../components/ClubContentRow/ClubContentRow";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import ClubNewsTop from "./ClubNewsTop";
import "./ClubNewsStyles.scss"

const ClubNews = () => {
  return (
    <div className="club news">
      <ClubNavbar />
      <Breadcrumbs />
      <ClubNewsTop />
      <div className="mid">
        <ClubContentRow
          header="News"
          subHeader={"All news"}
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
        </ClubContentRow>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubNews;
