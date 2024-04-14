import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../UserInfo";
import NavbarSmDevice from "./NavbarSmDevice";

const Navbar = () => {
  const { user } = useAuth();

  const routes = [
    { name: "Home", path: "/", type: "public" },
    { name: "Profile", path: "/profile", type: "private" },
    { name: "Update Profile", path: "/update-profile", type: "private" },
    { name: "About", path: "/about", type: "public" },
    { name: "Contact", path: "/contact", type: "public" },
  ];

  const navStyle = (isActive) => {
    return [
      isActive ? "text-blue-600" : "text-slate-700",
      isActive
        ? "border-b-2 border-blue-600 pr-2  lg:px-2 font-semibold"
        : "font-medium pr-2 lg:px-2",
    ].join(" ");
  };

  return (
    <div className="w-full p-2 lg:py-4 lg:px-8 flex items-center justify-between shadow-lg fixed bg-white">
      <div>
        <h1 className="text-2xl font-bold">
          <NavLink to={"/"}>Crestline Properties</NavLink>
        </h1>
      </div>

      <div
        className={`gap-4 flex-1 font-bold lg:flex hidden lg:static justify-center`}
      >
        {routes.map((route, index) => (
          <ul key={index}>
            <NavLink
              to={route.path}
              className={({ isActive }) => navStyle(isActive)}
            >
              {route.name}
            </NavLink>
          </ul>
        ))}
      </div>

      {user ? (
        <div className="lg:flex gap-2 hidden lg:static">
          <UserInfo />
        </div>
      ) : (
        <div className={`lg:flex gap-2 hidden lg:static`}>
          <div className="px-5 py-2 bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
            <NavLink to={"/sign-in"}>Sign In</NavLink>
          </div>
          <div className="px-5 py-2 bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
            <NavLink to={"/sign-up"}>Sign Up</NavLink>
          </div>
        </div>
      )}

      {/* mobile and tab */}
      <NavbarSmDevice routes={routes} navStyle={navStyle} />
    </div>
  );
};

export default Navbar;
