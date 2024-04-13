import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";

const MainLayout = () => {
  const navigation = useNavigation();
  const { isLoading } = useAuth();

  console.log(isLoading);

  if (navigation.state === "loading") return <Loader />;
  if (isLoading) return <Loader />;

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
