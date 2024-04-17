import "animate.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Crestline | User Profile</title>
      </Helmet>
      <div className="min-h-[calc(100vh-80px)] w-full mt-12">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center">
          <div className=" text-4xl text-center font-mulish">
            Welcome,{" "}
            <span className="font-lexend">{displayName || "User"}</span>
          </div>
          <div className="size-40 rounded-full overflow-hidden mt-10">
            <img
              src={photoURL}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div className="mt-8 text-xl font-mulish">
              <div className="text-zinc-600">Email: {email}</div>
              <div className="text-zinc-600">Name: {displayName}</div>
            </div>
            <div className="mt-16 flex gap-3 items-center">
              <p>Wish to update your profile, </p>
              <Link
                to="/update-profile"
                className="px-4 py-1 bg-blue-500 rounded text-zinc-100"
              >
                {" "}
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
