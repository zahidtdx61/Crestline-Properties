import { Avatar, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserInfo = () => {
  const { user, logOut } = useAuth();

  // useEffect(() => {
    
  // }, [user]);
  const { displayName, photoURL } = user;
  console.log("Info", user);

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
      <div className="flex items-center justify-end gap-3">
        <button>
          <Tooltip title={displayName}>
            <Avatar src={photoURL} />
          </Tooltip>
        </button>
        <button
          onClick={handleSignOut}
          className="px-5 py-2 bg-red-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105 hidden lg:block"
        >
          <NavLink to={"/"}>Sign Out</NavLink>
        </button>
      </div>
    </>
  );
};

export default UserInfo;
