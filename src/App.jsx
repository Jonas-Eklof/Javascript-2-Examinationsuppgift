import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import OmMig from "./pages/OmMig";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          {/* <OmMig /> */}
          <Route path="/" element={<OmMig />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
