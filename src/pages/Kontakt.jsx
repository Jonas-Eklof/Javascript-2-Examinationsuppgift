import React from "react";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="kontakt-wrapper">
      <div className="form-wrapper">
        <form action="">
          <input type="text" placeholder="Namn.." required />
          <input type="email" placeholder="Email.." required />
          <textarea
            name=""
            id=""
            placeholder="Ditt meddelande..."
            required
          ></textarea>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
