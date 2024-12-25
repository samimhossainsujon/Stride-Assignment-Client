import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-primary col-span-3 pt-12 px-5 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative z-10 w-full md:w-auto h-full md:h-auto space-y-5`}
      >
        <SideBar />
        <button
          className="btn btn-primary md:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          Close
        </button>
      </div>
      {/* Main Content */}
      <div className="md:col-span-9 col-span-12 pt-12">
        <button
          className={`btn btn-primary md:hidden ${
            isSidebarOpen ? "hidden" : ""
          }`}
          onClick={toggleSidebar}
        >
          Menu
        </button>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
