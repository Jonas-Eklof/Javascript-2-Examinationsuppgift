import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Starta animationen när komponenten mountas
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  return (
    // Är visible true (när komponenten mountas) så lägg till klassen "slide-down" som aktiverar animationen
    <nav className={`navbar ${visible ? "slide-down" : ""}`}>
      <div className="nav-wrapper">
        <h1>Jonas Eklöf</h1>
        <ul className="nav-links">
          <Link to="/">
            <li>Om mig</li>
          </Link>
          <Link to="/projekt">
            <li>Projekt</li>
          </Link>
          <Link to="/kontakt">
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
