import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";

const MainLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;

  return (
    <div>
      <div className="w-full h-20">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
