import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="w-full h-24">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
