import React from "react";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="kontakt-wrapper">
      <div className="form-wrapper">
        <form action="">
          <input type="text" placeholder="Namn.." />
          <input type="email" placeholder="Email.." />
          <textarea name="" id="" placeholder="Ditt meddelande..."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
