import React from "react";
import { useHistory } from "react-router-dom";
import "./CreateAgencyBtn.css";

/**
 * Component produces a button that directs the user to the AgencyForm page
 */
function CreateAgencyBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/create-agency");
  }

  return (
    <button type="button" className="create-agency-btn" onClick={handleClick}>
      <div className="res-circle">
        <strong>+</strong>
      </div>
      <span>Create New Agency Profile</span>
    </button>
  );
}

export default CreateAgencyBtn;
