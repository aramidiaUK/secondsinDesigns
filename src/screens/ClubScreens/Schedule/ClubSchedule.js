import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import NewsCard from "../../../components/Cards/NewsCard/NewsCard";
import ScheduleGameCard from "../../../components/Cards/ScheduleCard/ScheduleGameCard";
import DisplayedFooter from "../../../components/ClubFooter/DisplayedFooter";
import ClubNavbar from "../../../components/ClubNavbar/ClubNavbar";
import "./ClubScheduleStyles.scss";
const ClubSchedule = () => {
  return (
    <div className="club schedule">
      <ClubNavbar />
      <Breadcrumbs />
      <div className="schedule-topHeader">
        <div className="schedule-topHeader-imageBox">
          <img src={window.$stadiumImageLink} alt="schedule"/>
        </div>
        <div className="schedule-header">
          <div className="schedule-header__content">
          <h1>Upcoming <span>Matches &amp; Events</span></h1>
            <ul>
              <li>
                <button type="button">First Team</button>
              </li>
              <li>
                <button type="button">Youth Team</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="schedule-content">
          <div className="schedule-content__list">
            <h1 className="month-year">July 2021</h1>
            <ScheduleGameCard
              scheduleItem = {{
                matchStatus: 'Home', 
                dateTime: 'Sat Jul 17 - 14:00 GMT',
                location: 'Staples Center', 
                competition: 'National Basketball Association', 
                type:"match",
                opponent: {
                  clubName: 'Milwaukee Bucks'
                }
              }}
            />
            <ScheduleGameCard
              scheduleItem = {{
                matchStatus: 'Home', 
                dateTime: 'Sat Jul 17 - 14:00 GMT',
                location: 'Staples Center', 
                competition: 'National Basketball Association', 
                type:"match",
                opponent: {
                  clubName: 'Manchester United',
                  imageLink: '/assets/images/manu__logo.png'
                }
              }}
            />
            <h1 className="month-year">August 2021</h1>
            <ScheduleGameCard
              scheduleItem = {{
                matchStatus: 'Away', 
                dateTime: 'Sat Jul 17 - 14:00 GMT',
                location: 'Staples Center', 
                competition: 'National Basketball Association', 
                type:"match",
                opponent: {
                  clubName: 'Chelsea FC',
                  imageLink: '/assets/images/chelsea__logo.png'
                }
              }}
            />
          </div>
          <aside className="schedule-content__misc">
            <NavLink to="/schedule/print" className="btn">Printable Schedule List</NavLink>
            <NavLink to="/schedule/print" className="btn">View Archived Schedules</NavLink>
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

export default ClubSchedule;
