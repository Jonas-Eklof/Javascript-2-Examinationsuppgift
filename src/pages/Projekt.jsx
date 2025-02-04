import "./Projekt.css";

import SideBar from "../components/sidebar/SideBar";
import ProjektList from "../components/projekt-list/ProjektList";

const Projekt = () => {
  return (
    <div className="projekt-wrapper">
      <SideBar />
      <ProjektList />
    </div>
  );
};

export default Projekt;
