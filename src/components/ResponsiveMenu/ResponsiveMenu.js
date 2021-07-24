import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenuItem from "./ResponsiveMenuItem";
import ResponsiveMenuItemFooter from "./ResponsiveMenuItemFooter";
import "./ResponsiveMenuStyles.scss";
import ResponsiveMenuSubItem from "./ResponsiveMenuSubItem";
const ResponsiveMenu = ({classAddin}) => {
  return (
    <header className={`nav-header alt ${classAddin || ''}`}>
      <div className="logo-box">
       <NavLink to="/"><h1>SecondsIn.</h1></NavLink> 
      </div>
      <nav className="responsive-menu">
        <ResponsiveMenuItem
          title={"Latest News"}
          footer={{
            header: "Want to see the more of the latest",
            linkText: "All news",
            link: "/"
          }}
        >
          <ResponsiveMenuSubItem
            iconLink={[
              <img
                src="./assets/images/chelsea__logo.png"
                alt={`Michael Akinola moved club`}
              />
            ]}
            colors={"#034694"}
            title={`Michael Akinola moved club`}
            subText={`view the most recently added posts, the most recently`}
            sport={`Football`}
          />
          <ResponsiveMenuSubItem
            iconLink={[
              <img
                src="./assets/images/manu__logo.png"
                alt={`New Club Expansion`}
              />
            ]}
            colors={"#DA291C"}
            title={`New Club Expansion`}
            subText={`view the most recently added posts, the most recently added posts`}
            sport={`Football`}
          />
          <ResponsiveMenuSubItem
            iconLink={[
              <img
                src="./assets/images/lakers.png"
                alt={` Mitch Robinson Fined`}
              />
            ]}
            colors={"#552583"}
            title={`Mitch Robinson Fined`}
            subText={`view the most recently added posts, the most recently added posts`}
            sport={`Basketball`}
          />
        </ResponsiveMenuItem>
        <ResponsiveMenuItem 
            title={"Club Opportunities"}
            footer={{
            header: "Have a club position to fill?",
            linkText: "List Opportunity",
            link: "/pricing",
            color: "var(--SIPrimaryColor)"
          }}
        >
          <ResponsiveMenuSubItem
            iconLink={[
              <img
                src="./assets/images/chelsea__logo.png"
                alt={`Michael Akinola moved club`}
              />
            ]}
            colors={"#034694"}
            title={[<p>Talented Center Forward</p>]}
            subText={[<p>Looking for a quick center forward at least 5ft9... <strong>2 days ago</strong></p>]}
            sport={[<p>Chelsea &bull; London, N1</p>]}
          />
          <ResponsiveMenuSubItem
          iconLink={[
              <img
                src="./assets/images/manu__logo.png"
                alt={`Michael Akinola moved club`}
              />
            ]}
            colors={"rgb(218, 41, 28)"}
            title={[<p>Center half / box to box</p>]}
            subText={[<p>A tall center half with a thirst for goal, a do it all type player... <strong>2 days ago</strong></p>]}
            sport={[<p>Man Utd &bull; Manchester, M1</p>]}
          />
          <ResponsiveMenuSubItem
          iconLink={[
              <img
                src="./assets/images/lakers.png"
                alt={`Mitch Robinson Fined`}
              />
            ]}
            colors={"#552583"}
            title={[<p>Do it all big man</p>]}
            subText={[<p>Jokic type center able to make both mid range and 3point shots... <strong>1 days ago</strong></p>]}
            sport={[<p>LA Lakers &bull; Los Angeles</p>]}
          />
          <NavLink to="/" className="subItem-alt">
            <span>View all opportunites <small>100's of positions needing to be filled.</small></span>
            <i class='bx bx-user-pin' ></i>
          </NavLink>
        </ResponsiveMenuItem>
        <ResponsiveMenuItem title={"Community"}>
          <ResponsiveMenuSubItem
            iconLink={[
                <i class='bx bxl-twitter' ></i>
            ]}
            colors={"#1DA1F2"}
            title={`Twitter`}
            subText={`Get in touch, keep an eye on our tweets`}
          />
          <ResponsiveMenuSubItem
            iconLink={[
                <i class='bx bxl-facebook' ></i>
            ]}
            colors={"#4267B2"}
            title={`Facebook`}
            subText={`Follow us on Facebook, latest promotions added here`}
          />
          <ResponsiveMenuSubItem
            iconLink={[
                <i class='bx bxl-instagram' ></i>
            ]}
            colors={"#833AB4"}
            title={`Instagram`}
            subText={`Exclusive news and images added regularly`}
          />
          <ResponsiveMenuSubItem
            iconLink={[
                <i class='bx bxl-telegram' ></i>
            ]}
            colors={"#0088CC"}
            title={`Telegram`}
            subText={`Our telegram announcements channel, read about our latest features`}
          />
        </ResponsiveMenuItem>
      </nav>
      <div className="btn-group">
        <NavLink to="/register" type="button" className="btn ripple">
          Sign up
        </NavLink>
        <NavLink to="/login" type="button" className="btn ripple outline">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default ResponsiveMenu;
