import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../UserInfo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <UserInfo />
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
      <div
        className={`z-[10] lg:flex gap-1 w-fit min-w-40 font-bold absolute duration-1000 bg-white px-8 py-4 shadow ${
          open ? "top-16 right-4" : "-top-96 right-4"
        } lg:hidden rounded-md h-fit flex flex-col justify-start items-start`}
      >
        {routes.map((route, index) => (
          <ul key={index} className="pl">
            <NavLink
              to={route.path}
              className={({ isActive }) => navStyle(isActive)}
            >
              {route.name}
            </NavLink>
          </ul>
        ))}

        <ul className="px-2 py-1 w-full mt-4 text-center  bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </ul>
        <ul className="px-2 py-1 w-full text-center bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-up"}>Sign Up</NavLink>
        </ul>
      </div>

      <div
        onClick={() => setOpen((val) => !val)}
        className="text-3xl lg:hidden p-1"
      >
        {open ? <AiOutlineClose /> : <LuMenu />}
      </div>
    </div>
  );
};

export default Navbar;
