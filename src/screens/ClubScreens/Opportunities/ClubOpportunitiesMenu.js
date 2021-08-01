import React, { useEffect, useState } from "react";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import FormInput from "../../../components/FormInput/FormInput";
import "./OpportunitiesMenuStyles.scss";

const ClubOpportunitiesMenu = () => {
  const [seacrhInput, setSearchInput] = useState("");
  const [roleType, setRoleType] = useState({ value: "player", label: "Player" });
  const [position, setPosition] = useState({ value: "any", label: "Any" });
  const [compensation, setCompensation] = useState({ value: "paid", label: "Paid" });

  useEffect(() => {

  });
  return (
    <div className="opportunities-menu">
      <div className="opportunities-menu__content">
        <form onSubmit={e => {e.preventDefault()}}>
          <h1>
            Filter <span>Refine search to get better results</span>
          </h1>
          <FormInput
            labelFor="searchRole"
            labelName="Position Search"
            type="search"
            change={e => {
              setSearchInput(e.currentTarget.value);
            }}
            placeholder={"Search position by name"}
            initialValue={seacrhInput}
          />
          <CustomSelect
            selectedState={roleType}
            setSelectedState={setRoleType}
            options={[
              { value: "player", label: "Player" },
              { value: "staff", label: "Staff" }
            ]}
            labelFor={"role"}
            labelText={"Role Type"}
          />
          {roleType.value === "staff"
            ? <CustomSelect
                selectedState={position}
                setSelectedState={setPosition}
                options={[
                  { value: "facilities", label: "Facilities" },
                  { value: "coach", label: "Coaching" },
                  { value: "manager", label: "Manager" },
                  { value: "editor", label: "Editor" },
                  { value: "any", label: "Any" }
                ]}
                labelFor={"position"}
                labelText={"Position"}
              />
            : roleType.value === "player" 
            
            ? <CustomSelect
                selectedState={position}
                setSelectedState={setPosition}
                options={[
                  { value: "forward", label: "Striker" },
                  { value: "winger", label: "Winger" },
                  { value: "any", label: "Any" }
                ]}
                labelFor={"position"}
                labelText={"Position"}
              />
            : <input type="text" disabled/>
            }
            <CustomSelect
                selectedState={compensation}
                setSelectedState={setCompensation}
                options={[
                  { value: "paid", label: "Paid" },
                  { value: "volunteer", label: "Volunteer/Un-paid" },
                ]}
                labelFor={"compensation"}
                labelText={"Compensation"}
              />

              <div className="form-group">
                  <button type="submit" className="btn">Update Search</button>
              </div>
        </form>
      </div>
      <div className="opportunities-menu__footer"/>
    </div>
  );
};

export default ClubOpportunitiesMenu;
