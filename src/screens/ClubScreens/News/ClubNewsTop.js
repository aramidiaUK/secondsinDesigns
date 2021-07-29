import React from "react";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import ClubContentRow from "../../../components/ClubContentRow/ClubContentRow";

const ClubNewsTop = () => {
  return (
    <ClubContentRow parentClass="news" classAddin="news-top-row">
      <NewsCard
        classAddin="wide"
        post={{
          title: "Example news card - new club added to the S...",
          shortDescription:
            "In publishing and graphic des ign, Lorem ipsum may be used as a placeholder before final copy is available.",
          imageLink: "/assets/images/football.jpg",
          type: "News",
          author: {
            user: {
              imageLink: "/assets/images/person1.jpeg",
              full_name: "Henry Akinola",
              occupation: "Club Manager"
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
    </ClubContentRow>
  );
};

export default ClubNewsTop;
