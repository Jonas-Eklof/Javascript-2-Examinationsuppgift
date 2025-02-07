import React, { useEffect, useRef } from "react";

const KontaktForm = () => {
  const nameInputRef = useRef(null);

  // sätter focus på namn-input direkt när sidan laddas/komponenten mountas
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <main className="kontakt-wrapper">
      <section className="form-wrapper">
        <h1>Hör gärna av dig!</h1>
        <form>
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
      </section>
    </main>
  );
};

export default KontaktForm;
