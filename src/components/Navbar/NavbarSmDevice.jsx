import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../UserInfo";

const NavbarSmDevice = ({ routes, navStyle }) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const { user, logOut } = useAuth();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Sign out successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-end gap-2 lg:hidden">
        {user && <UserInfo />}
        <div
          onClick={() => setOpen((val) => !val)}
          className="text-3xl lg:hidden p-1"
        >
          {open ? <AiOutlineClose /> : <LuMenu />}
        </div>
      </div>

      <div
        className={`z-[10] lg:flex gap-1 w-fit min-w-40 font-bold absolute duration-1000 bg-white px-8 py-4 shadow ${
          open ? "top-16 lg:top-20 right-4" : "-top-96 right-4"
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

        {user && (
          <ul>
            <button  onClick={handleSignOut}>
              Sign Out
            </button>
          </ul>
        )}

        {!user && (
          <>
            <ul className="px-2 py-1 w-full mt-4 text-center  bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
              <NavLink to={"/sign-in"}>Sign In</NavLink>
            </ul>
            <ul className="px-2 py-1 w-full text-center bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
              <NavLink to={"/sign-up"}>Sign Up</NavLink>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

NavbarSmDevice.propTypes = {
  routes: PropTypes.array,
  navStyle: PropTypes.func,
};

export default NavbarSmDevice;
