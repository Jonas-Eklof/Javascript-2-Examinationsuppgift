import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Starta animationen när komponenten mountas
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  return (
    <nav className={`navbar ${visible ? "slide-down" : ""}`}>
      <div className="nav-wrapper">
        <h1>Jonas Eklöf</h1>
        <ul className="nav-links">
          <li>Om mig</li>
          <li>Projekt</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
