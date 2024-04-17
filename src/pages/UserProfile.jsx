import "animate.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;
  const defaultImage = "https://i.postimg.cc/fL19sCM8/user-3.png";
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Crestline | User Profile</title>
      </Helmet>
      <div className="min-h-[calc(100vh-80px)] w-full mt-12 p-2">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center">
          <div className="animate__animated animate__fadeInDown text-4xl text-center font-mulish">
            Welcome,{" "}
            <span className="font-lexend">{displayName || "User"}</span>
          </div>
          <div className="size-40 rounded-full overflow-hidden mt-10">
            <img
              src={photoURL || defaultImage}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div className="mt-8 text-xl font-mulish ">
              <div className="text-zinc-600">
                <span className="font-semibold">Email: </span> {email || "Not available"}
              </div>
              <div className="text-zinc-600">
                <span className="font-semibold">Name: </span> {displayName}
              </div>
            </div>
            <div className="mt-16 flex gap-3 items-center animate__animated animate__zoomIn">
              <p>Wish to update your profile, </p>
              <Link
                to="/update-profile"
                className="px-4 py-1 bg-blue-600 rounded text-zinc-50 hover:scale-105 hover:bg-opacity-75 transition-all duration-300 ease-in-out"
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
