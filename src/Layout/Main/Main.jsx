import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <div className="bg-primary">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main
