import React from "react";
import ADCard from "../../../components/Cards/ADCard/ADCard";
import TeamCard from "../../../components/Cards/TeamCard/TeamCard";
import ClubContentRow from "../../../components/ClubContentRow/ClubContentRow";

const ClubTeamsTop = () => {
  return (
    <ClubContentRow parentClass="news" header={'Teams'} subHeader={'The lineups'}>
      <TeamCard
        classAddin="wide"
        teamDetails={{
          teamName: "First team",
          teamType: "Mens Team"
        }}
      />
      <ADCard
        backdropImageLink={"/assets/images/basketballStadium.jpg"}
        brandImageLink={"/assets/images/klutchSponsorship.jpeg"}
        caption={"Game Time"}
        buttonText={"Download App"}
      />
    </ClubContentRow>
  );
};

export default ClubTeamsTop;
