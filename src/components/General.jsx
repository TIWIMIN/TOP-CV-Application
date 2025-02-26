import { useState } from "react";
import EditButton from "./EditButton";
export default function General() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone-number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{name ? name : "Name"}</h3>
          <h4>{email ? email : "Email"}</h4>
          <h4>{phoneNumber ? phoneNumber : "Phone Number"}</h4>
        </>
      )}
    </>
  );
}
