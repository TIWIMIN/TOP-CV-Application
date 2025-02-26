import { useState } from "react";
import EditButton from "./EditButton";
export default function Education() {
  const [editMode, setEditMode] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  function toggleEditMode(e) {
    e.preventDefault();
    editMode ? setEditMode(false) : setEditMode(true);
  }

  return (
    <>
      <h2>Education</h2>
      <EditButton handleClick={toggleEditMode} />
      {editMode ? (
        <>
          <input
            type="text"
            placeholder="name of school"
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <input
            type="text"
            placeholder="major"
            onChange={(e) => setMajor(e.target.value)}
          />
          <input type="date" onChange={(e) => setDateStart(e.target.value)} />
          <input type="date" onChange={(e) => setDateEnd(e.target.value)} />
        </>
      ) : (
        <>
          <h3>{schoolName ? schoolName : "School Name"}</h3>
          <h4>{major ? major : "Major"}</h4>
          <h3>{dateStart ? dateStart : "Date"}</h3>
          <h3>{dateEnd ? dateEnd : ""}</h3>
        </>
      )}
    </>
  );
}
