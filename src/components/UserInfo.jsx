import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserInfo = () => {
  const { logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleUser = () => {
    console.log("Clicked");
    setOpen(!open);
  };

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
      <Avatar onClick={handleUser}>H</Avatar>

      <div
        className={`flex items-start flex-row-reverse justify-around absolute duration-1000 w-1/3 max-w-[300px] min-w-[200px] bg-white p-4 rounded shadow ${
          open ? "top-16 lg:top-20 right-4" : "right-4 -top-96"
        }`}
      >
        <button onClick={() => setOpen(false)}>
          <RxCross1 size={25} />
        </button>
        <ul className="text-slate-600">
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/update-profile"}>Update Profile</NavLink>
          </li>
          <li>
            <button onClick={handleSignOut}>
              <NavLink to={"/"}>Sign Out</NavLink>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserInfo;
