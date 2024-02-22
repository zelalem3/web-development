import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function namehandler(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return{
        ...prevValue,
        [name]: value
      };
      }

    );
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={namehandler}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={namehandler}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={namehandler}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
