import React, { useState } from "react";
import HeadingSubHeading from "./../../components/HeadingSubHeading";
import Button from "./../../components/Button";
// import PersonIcon from "@mui/icons-material/Person";
// import GroupsIcon from "@mui/icons-material/Groups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
export default function CreateWorkspace({ nextPage }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleFormSubmit = () => {
    console.log("form submit - workspace type");
    console.log(
      selectedItem === 0 ? "workspace type - myself" : "workspace type - team"
    );
    nextPage();
  };
  const renderSelectionButtons = () => {
    return (
      <div className="selections">
        <div
          className={
            selectedItem === 0 ? "selection-item selected" : "selection-item"
          }
          onClick={() => setSelectedItem(0)}
        >
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div className="selection-item-heading">For myself</div>
          <div className="selection-item-subheading">
            Write better. Think more clearly. Stay organized
          </div>
        </div>
        <div
          className={
            selectedItem === 1 ? "selection-item selected" : "selection-item"
          }
          onClick={() => setSelectedItem(1)}
        >
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <div className="selection-item-heading">With my team</div>
          <div className="selection-item-subheading">
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <HeadingSubHeading
        heading="How are you planning to use Eden?"
        subheading="We'll steamline your setup experience accordingly."
      />
      {renderSelectionButtons()}
      <Button text="Create Workspace" onClick={handleFormSubmit} />
    </div>
  );
}
