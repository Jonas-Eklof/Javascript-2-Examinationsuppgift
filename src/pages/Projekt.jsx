import "./Projekt.css";

import SideBar from "../components/sidebar/SideBar";
import ProjektList from "../components/projekt-list/ProjektList";

const Projekt = () => {
  return (
    <main className="projekt-wrapper">
      <SideBar />
      <ProjektList />
    </main>
  );
};

export default Projekt;
