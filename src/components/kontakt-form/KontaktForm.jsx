import React, { useEffect, useRef } from "react";

const KontaktForm = () => {
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <div className="kontakt-wrapper">
      <div className="form-wrapper">
        <form action="">
          <input type="text" ref={nameInputRef} placeholder="Namn.." required />
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

export default KontaktForm;
