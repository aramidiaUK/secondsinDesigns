import React, { useState } from "react";
import PlanTable from "../PlanTable/PlanTable";
import PlanTableItem from "../PlanTable/PlanTableItem";
import "./TabsContent.scss";
const TabsContent = () => {
  const [freeChecked, setFreeChecked] = useState(true);
  const [premiumChecked, setPremiumChecked] = useState(false);
  const [vipChecked, setVipChecked] = useState(false);

  return (
    <div className="si-tabs">
      <div className="si-tabs__content">
        <input
          type="radio"
          name="slider"
          id="free"
          onClick={e => {
            setFreeChecked(e.currentTarget.checked ? true : false);
            setPremiumChecked(false)
            setVipChecked(false)
          }}
          checked={freeChecked}
        />
        <input
          type="radio"
          name="slider"
          id="premium"
          onClick={e => {
            setPremiumChecked(e.currentTarget.checked ? true : false);
            setVipChecked(false)
            setFreeChecked(false)
          }}
          checked={premiumChecked}
        />
        <input
          type="radio"
          name="slider"
          id="vip"
          onClick={e => {
            setVipChecked(e.currentTarget.checked ? true : false);
            setPremiumChecked(false)
            setFreeChecked(false)
          }}
          checked={vipChecked}
        />
        <nav className="si-tabs__content-nav">
          <label htmlFor="free" className="free">
            <i class="bx bx-book-content" />
            Free Plan
          </label>
          <label htmlFor="premium" className="premium">
            <i class="bx bxs-devices" />
            Premium Plan
          </label>
          <label htmlFor="vip" className="vip">
            <i class="bx bx-buildings" />
            VIP Plan
          </label>
          <div className="slider" />
        </nav>
        <div className="si-tabs__contetn-priceContent">
          <div className="si-tabs__contetn-priceContent-info">
            {freeChecked &&
              <PlanTable
                show={freeChecked}
                PlanTitle={"Free Plan"}
                price={`£0`}
                plan="free"
              >
                <PlanTableItem
                  planName="Free custom theme"
                  planDescription={[
                    <p>
                      Simply add your brand, colors and design tweaks to make
                      the design your own
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Responsive design"
                  planDescription={[
                    <p>
                      Mobile first, your app will be full responsive on any
                      device
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Multiple teams"
                  planDescription={[
                    <p>
                      Ability to ad up to <strong>two</strong> teams at once
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Club management"
                  planDescription={[
                    <p>
                      Manage your teams, players and contact them using are in
                      app message board
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Email Support"
                  planDescription={[
                    <p>
                      Have a issue, free email support is available to help
                      assist you with any problems
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Staff management"
                  planDescription={[
                    <p>
                      Add Staff to manage your club app, add content, edit
                      lineups and players
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  key={"Multiple Teams"}
                  planName="Admin dashboard"
                  planDescription={[
                    <p>Manage club sponsors add custom ads within your app</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Unlimited teams"
                  planDescription={[
                    <p>Have the abbility to add as many teams as you wish</p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Opportunities"
                  planDescription={[
                    <p>
                      Share opportunities, build up your club make the most of
                      the recruitment feature
                    </p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Account manager"
                  planDescription={[
                    <p>Personal account manager to get you up and running</p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Uncapped content"
                  planDescription={[
                    <p>Ability to post unlimited ammount of posts</p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Import/Export"
                  planDescription={[
                    <p>
                      Be able to import your clubs players using previous club
                      data
                    </p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Custom domain"
                  planDescription={[
                    <p>
                      Add your own unique club domain i.e:{" "}
                      <strong>
                        <em> myclub.com</em> <small>(coming soon)</small>
                      </strong>
                    </p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Free technical support"
                  planDescription={[
                    <p>
                      All club members get free technical support to get your
                      club up and running
                    </p>
                  ]}
                  status={false}
                />
              </PlanTable>}
              {premiumChecked &&
              <PlanTable
                show={premiumChecked}
                PlanTitle={"Premium Plan"}
                price={`£29`}
                plan="premium"
              >
                <PlanTableItem
                  planName="Free custom theme"
                  planDescription={[
                    <p>
                      Simply add your brand, colors and design tweaks to make
                      the design your own
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Responsive design"
                  planDescription={[
                    <p>
                      Mobile first, your app will be full responsive on any
                      device
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Multiple teams"
                  planDescription={[
                    <p>
                      Ability to ad up to <strong>five</strong> teams at once
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Club management"
                  planDescription={[
                    <p>
                      Manage your teams, players and contact them using are in
                      app message board
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Email Support"
                  planDescription={[
                    <p>
                      Have a issue, free email support is available to help
                      assist you with any problems
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Staff management"
                  planDescription={[
                    <p>
                      Add Staff to manage your club app, add content, edit
                      lineups and players
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  key={"Multiple Teams"}
                  planName="Admin dashboard"
                  planDescription={[
                    <p>Manage club sponsors add custom ads within your app</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="More teams"
                  planDescription={[
                    <p>Have the abbility to have as many as 5 teams at a time</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Opportunities"
                  planDescription={[
                    <p>
                      Share opportunities, build up your club make the most of
                      the recruitment feature
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Uncapped content"
                  planDescription={[
                    <p>Ability to post unlimited ammount of posts</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Account manager"
                  planDescription={[
                    <p>Personal account manager to get you up and running</p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Import/Export"
                  planDescription={[
                    <p>
                      Be able to import your clubs players using previous club
                      data
                    </p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Custom domain"
                  planDescription={[
                    <p>
                      Add your own unique club domain i.e:{" "}
                      <strong>
                        <em> myclub.com</em> <small>(coming soon)</small>
                      </strong>
                    </p>
                  ]}
                  status={false}
                />
                <PlanTableItem
                  planName="Free technical support"
                  planDescription={[
                    <p>
                      All club members get free technical support to get your
                      club up and running
                    </p>
                  ]}
                  status={false}
                />
              </PlanTable>}
              {vipChecked &&
              <PlanTable
                show={vipChecked}
                PlanTitle={"VIP Plan"}
                price={`£59`}
                plan="vip"
              >
                <PlanTableItem
                  planName="Free custom theme"
                  planDescription={[
                    <p>
                      Simply add your brand, colors and design tweaks to make
                      the design your own
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Responsive design"
                  planDescription={[
                    <p>
                      Mobile first, your app will be full responsive on any
                      device
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Multiple teams"
                  planDescription={[
                    <p>
                      Ability to ad up to <strong>two</strong> teams at once
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Club management"
                  planDescription={[
                    <p>
                      Manage your teams, players and contact them using are in
                      app message board
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Email Support"
                  planDescription={[
                    <p>
                      Have a issue, free email support is available to help
                      assist you with any problems
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Staff management"
                  planDescription={[
                    <p>
                      Add Staff to manage your club app, add content, edit
                      lineups and players
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  key={"Multiple Teams"}
                  planName="Admin dashboard"
                  planDescription={[
                    <p>Manage club sponsors add custom ads within your app</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Unlimited teams"
                  planDescription={[
                    <p>Have the abbility to add as many teams as you wish</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Opportunities"
                  planDescription={[
                    <p>
                      Share opportunities, build up your club make the most of
                      the recruitment feature
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Uncapped content"
                  planDescription={[
                    <p>Ability to post unlimited ammount of posts</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Account manager"
                  planDescription={[
                    <p>Personal account manager to get you up and running</p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Import/Export"
                  planDescription={[
                    <p>
                      Be able to import your clubs players using previous club
                      data
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Custom domain"
                  planDescription={[
                    <p>
                      Add your own unique club domain i.e:{" "}
                      <strong>
                        <em> myclub.com</em> <small>(coming soon)</small>
                      </strong>
                    </p>
                  ]}
                  status={true}
                />
                <PlanTableItem
                  planName="Free technical support"
                  planDescription={[
                    <p>
                      All club members get free technical support to get your
                      club up and running
                    </p>
                  ]}
                  status={true}
                />
              </PlanTable>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContent;
