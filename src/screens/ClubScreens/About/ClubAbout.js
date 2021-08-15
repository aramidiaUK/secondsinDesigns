import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import "./ClubAboutStyles.scss";

const ClubAbout = () => {
  return (
    <div className="club about">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="mid">
        <div className="about-content">
          <div className="about-content__article">
            <div className="about-content__article-banner">
              <div className="about-content__article-banner-title">
                <h1>
                  {window.$clubName}
                </h1>
              </div>

              <div className="about-content__article-banner-imageBox">
                <img src={window.$fallbackLogo} alt={window.$clubName} />
              </div>
            </div>
            <div className="about-content__article-info">
              <h1>The Los Angeles Lakers <span>A place where winners are made</span></h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                id ornare arcu odio. Gravida quis blandit turpis cursus in hac
                habitasse. Auctor neque vitae tempus quam. Interdum velit
                euismod in pellentesque. Non blandit massa enim nec dui nunc.
                Ipsum faucibus vitae aliquet nec ullamcorper. Donec ac odio
                tempor orci. <br/><br/>Aliquet nec ullamcorper sit amet risus nullam. Eget
                est lorem ipsum dolor sit amet consectetur adipiscing elit. Ac
                turpis egestas integer eget. Lectus quam id leo in vitae turpis
                massa sed elementum. Metus dictum at tempor commodo ullamcorper.
                Consectetur adipiscing elit pellentesque habitant. Tortor
                posuere ac ut consequat semper viverra. Odio ut sem nulla
                pharetra. Imperdiet proin fermentum leo vel orci porta non
                pulvinar neque. <br/><br/>Turpis egestas pretium aenean pharetra. Sed odio
                morbi quis commodo odio aenean sed adipiscing diam. Nisl
                suscipit adipiscing bibendum est ultricies integer quis auctor.
                Suscipit adipiscing bibendum est ultricies integer quis.
                Ultricies integer quis auctor elit sed. Dignissim diam quis enim
                lobortis. Dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis gravida. Id donec ultrices tincidunt arcu non sodales
                neque sodales ut. Eu tincidunt tortor aliquam nulla facilisi
                cras fermentum odio eu. <br/><br/>Vestibulum sed arcu non odio euismod
                lacinia at quis. Enim ut tellus elementum sagittis vitae et leo.
                Ante metus dictum at tempor commodo ullamcorper a. Penatibus et
                magnis dis parturient montes nascetur ridiculus mus mauris.
                Lectus mauris ultrices eros in cursus turpis massa. In aliquam
                sem fringilla ut morbi. Ante in nibh mauris cursus mattis
                molestie a iaculis. Rutrum quisque non tellus orci ac auctor
                augue mauris. Sit amet justo donec enim diam. Venenatis cras sed
                felis eget velit aliquet sagittis. Tincidunt eget nullam non
                nisi est sit. Ultricies mi eget mauris pharetra et ultrices
                neque. Scelerisque eu ultrices vitae auctor. Lectus quam id leo
                in vitae turpis.<br/><br/>Vestibulum sed arcu non odio euismod
                lacinia at quis. Enim ut tellus elementum sagittis vitae et leo.
                Ante metus dictum at tempor commodo ullamcorper a. Penatibus et
                magnis dis parturient montes nascetur ridiculus mus mauris.
                Lectus mauris ultrices eros in cursus turpis massa. In aliquam
                sem fringilla ut morbi. Ante in nibh mauris cursus mattis
                molestie a iaculis. Rutrum quisque non tellus orci ac auctor
                augue mauris. Sit amet justo donec enim diam. Venenatis cras sed
                felis eget velit aliquet sagittis. Tincidunt eget nullam non
                nisi est sit. Ultricies mi eget mauris pharetra et ultrices
                neque. Scelerisque eu ultrices vitae auctor. Lectus quam id leo
                in vitae turpis.
              </p>
            </div>
          </div>
          <aside className="about-content__misc">
          <h1>Latest <span>News</span></h1>
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
          </aside>
        </div>
      </div>
      <DisplayedFooter />
    </div>
  );
};

export default ClubAbout;
