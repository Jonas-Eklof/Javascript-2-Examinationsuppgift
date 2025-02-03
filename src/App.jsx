import { Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<OmMig />} />
          <Route path="/projekt" element={<Projekt />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
