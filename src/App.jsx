import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import OmMig from "./pages/OmMig";
import Projekt from "./pages/Projekt";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Ändrar så att "om mig"-sidan är förstasidan */}
          <Route path="/" element={<Navigate to="/om-mig" replace />} />
          <Route path="/om-mig" element={<OmMig />} />
          <Route path="/projekt" element={<Projekt />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
