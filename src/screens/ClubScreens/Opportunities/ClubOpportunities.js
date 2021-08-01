import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import OpportunitiesCard from "../../../components/Cards/OpportunitiesCard/OpportunitiesCard";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import ClubOpportunitiesMenu from "./ClubOpportunitiesMenu";
import OpportunitiesPromoBanner from "./OpportunitiesPromoBanner";
import "./OpportunitiesStyles.scss";

const ClubOpportunities = () => {
  return (
    <div className="club opportunities">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <OpportunitiesPromoBanner
          imageBackdrop={"/assets/images/teamPhoto.jpg"}
          brand={"/assets/images/espnSponsor.png"}
          header={"Get the latest on sports news"}
          subHeader={"Official news sources"}
        />
        <header className={`news-content-header`}>
          <h1>
            Club Careers <span>Join our club, find a position</span>
          </h1>
        </header>
        <div className="opportunities-body">
          <ClubOpportunitiesMenu />
          <div className="opportunities-body__content">
            <OpportunitiesCard
              image="/assets/images/job_placeholders/rugbyPlayerRole.jpg"
              compensation="Community Team"
              compensationType="unpaid"
              header="Do it all big man"
              position="LOLB"
              body="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              dateSince="2 Days Ago"
              height="5ft8 - 6ft11"
              age="18-25"
              gender="Male"
              linkTo="/"
              type="player"

            />
            <OpportunitiesCard
              image="/assets/images/job_placeholders/coachStaff.jpg"
              compensation="Paid"
              compensationType="paid"
              header="Bring unity, ability to train a young team"
              position="Coach"
              body="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              dateSince="4 Days Ago"
              height="any"
              age="any"
              gender="not-specific"
              linkTo="/"
              type="staff"
            />
            <OpportunitiesCard
              image="/assets/images/job_placeholders/editorStaff.jpg"
              compensation="Voulenteer"
              compensationType="unpaid"
              header="Creative Club content creator"
              position="Editor"
              body="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              dateSince="2 Weeks Ago"
              height="any"
              age="any"
              gender="not-specific"
              linkTo="/"
              type="staff"
            />
          </div>
        </div>
      </div>

      <DisplayedFooter />
    </div>
  );
};

export default ClubOpportunities;
