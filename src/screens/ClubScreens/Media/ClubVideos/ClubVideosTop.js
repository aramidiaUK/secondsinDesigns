import React from "react";
import ADCard from "../../../../components/Cards/ADCard/ADCard";
import VideoCard from "../../../../components/Cards/VideoCard/VideoCard";
import ClubContentRow from "../../../../components/ClubContentRow/ClubContentRow";

const ClubVideosTop = () => {
  return (
    <ClubContentRow parentClass="news" classAddin="videos-top-row" header="Latest" subHeader="Recently Added Videos">
      <VideoCard
        backdropImageLink={"/assets/images/football-2.jpg"}
        sponsorImageLink={"/assets/images/espnSponsor.png"}
        caption={"A great goal from Sanchez on his debut"}
        classAddin={"wide"}
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
      <ADCard
        backdropImageLink={"/assets/images/fans.jpeg"}
        brandImageLink={"/assets/images/espnSponsor.png"}
        caption={"Best place to watch live sports"}
        buttonText={"View Now"}
      />
      <VideoCard
        backdropImageLink={"/assets/images/football.jpg"}
        sponsorImageLink={"/assets/images/fa2.png"}
        caption={"A great goal from..."}
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
    </ClubContentRow>
  );
};

export default ClubVideosTop;
