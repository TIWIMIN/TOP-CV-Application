import { useState } from "react";
import EditButton from "./EditButton";
export default function Experience() {
  const [editMode, setEditMode] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPostiionName] = useState("");
  const [experience, setExperience] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function toggleEditMode(e) {
    e.preventDefault();
    editMode ? setEditMode(false) : setEditMode(true);
  }

  return (
    <>
      <h2>Experience</h2>
      <EditButton handleClick={toggleEditMode} />
      {editMode ? (
        <>
          <input
            type="text"
            placeholder="company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="position name"
            onChange={(e) => setPostiionName(e.target.value)}
          />
          <input
            type="textarea"
            onChange={(e) => setExperience(e.target.value)}
          />
          <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" onChange={(e) => setEndDate(e.target.value)} />
        </>
      ) : (
        <>
          <h3>{companyName ? companyName : "Company Name"}</h3>
          <h4>{positionName ? positionName : "Position Name"}</h4>
          <p>{experience ? experience : "Experience"}</p>
          <h4>{startDate ? startDate : "Start Date"}</h4>
          <h4>{endDate ? endDate : "End Date"}</h4>
        </>
      )}
    </>
  );
}
