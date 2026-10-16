import { useState } from "react";

export default function InteractiveProfile({ name, description }) {
  const [messageChange, setMessageChange] = useState(false);
  const [nameInput, setNameInput] = useState("");
  let toggleMessage = () => {
    setMessageChange(!messageChange);
  };
  function handleChange(event) {
    setNameInput(event.target.value);
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <hr />
      <b>Profile Message</b>
      <p>
        {messageChange
          ? "Welcome To My Profile!"
          : "Thanks for visiting my profile!"}
      </p>
      <button onClick={toggleMessage}>Change Message</button>
      <br />
      <input type="text" placeholder="Enter Your Name" value={nameInput} onChange={handleChange}/>
      <p>Characters Typed: {nameInput.length}</p>
    </div>
  );
}
