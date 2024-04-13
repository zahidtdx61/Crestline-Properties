import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navStyle = (isActive) => {
    return [
      isActive ? "text-blue-600" : "text-slate-700",
      isActive
        ? "border-b border-blue-600 px-2 font-semibold"
        : "font-medium px-2",
    ].join(" ");
  };

  return (
    <div className="w-full p-2 lg:py-4 lg:px-16 flex items-center justify-between shadow-lg fixed bg-white">
      <div>
        <h1 className="text-2xl font-bold">
          <NavLink to={"/"}>Crestline Properties</NavLink>
        </h1>
      </div>

      <div className={`gap-8 font-bold lg:flex hidden lg:static`}>
        <ul>
          <NavLink to={"/"} className={({ isActive }) => navStyle(isActive)}>
            Home
          </NavLink>
        </ul>

        <ul>
          <NavLink
            to={"/about"}
            className={({ isActive }) => navStyle(isActive)}
          >
            About
          </NavLink>
        </ul>

        <ul>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => navStyle(isActive)}
          >
            Contact
          </NavLink>
        </ul>
      </div>

      <div className={`lg:flex gap-4 hidden lg:static`}>
        <div className="px-5 py-2 bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </div>
        <div className="px-5 py-2 bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-up"}>Sign Up</NavLink>
        </div>
      </div>

      {/* mobile and tab */}
      <div
        className={`lg:flex gap-8 font-bold absolute duration-1000 bg-white px-8 py-4 shadow ${
          open ? "top-16 right-4" : "-top-80 right-4"
        } lg:hidden`}
      >
        <ul>
          <NavLink to={"/"} className={({ isActive }) => navStyle(isActive)}>
            Home
          </NavLink>
        </ul>

        <ul>
          <NavLink
            to={"/about"}
            className={({ isActive }) => navStyle(isActive)}
          >
            About
          </NavLink>
        </ul>

        <ul>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => navStyle(isActive)}
          >
            Contact
          </NavLink>
        </ul>

        <ul className="px-2 py-1 text-center mt-6 bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </ul>
        <ul className="px-2 py-1 text-center mt-2 bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
          <NavLink to={"/sign-up"}>Sign Up</NavLink>
        </ul>
      </div>

      <div
        onClick={() => setOpen((val) => !val)}
        className="text-3xl md:hidden p-1"
      >
        {open ? <AiOutlineClose /> : <LuMenu />}
      </div>
    </div>
  );
};

export default Navbar;
