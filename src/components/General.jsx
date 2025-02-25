import { useState } from "react";
import EditButton from "./EditButton";
export default function General() {
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode(e) {
    e.preventDefault();
    editMode ? setEditMode(false) : setEditMode(true);
  }

  return (
    <>
      <h2>General Information</h2>
      <EditButton handleClick={toggleEditMode} />
      {editMode ? (
        <>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="phone-number" />
        </>
      ) : (
        <>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Phone Number</h3>
        </>
      )}
    </>
  );
}
