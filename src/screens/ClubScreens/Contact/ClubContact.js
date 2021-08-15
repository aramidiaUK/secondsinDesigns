import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import StaffCard from "../../../components/Cards/StaffCard/StaffCard";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import ContactForm from "./ContactForm";
import "./ContactStyles.scss";

const ClubContact = () => {
  return (
    <div className="club contact">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <div className="contact__content">
          <div className="contact__content-staff">
            <div className={`news-content`}>
              <header className={`news-content-header`}>
                <h1>
                  Staff
                  <span>Profiles</span>
                </h1>
              </header>
            </div>
            <div className="contact__content-staff-content">
              <StaffCard
                staffProfile={{
                  fullName: "Henry Akinola",
                  occupation: "Physio Therapist",
                  imageLink: "/assets/images/d_wade.jpg",
                  linkedIn: "/#",
                  facebook: "/#",
                  twitter: "/#",
                  insta: "/#"
                }}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubContact;
