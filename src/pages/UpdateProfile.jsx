import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUser, setUser, setIsLoading } = useAuth();
  const { displayName, email, photoURL } = user;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, photoUrl } = data;

    if (name !== displayName || photoUrl !== photoURL) {
      try {
        await updateUser(name, photoUrl);
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        setIsLoading(false);
        toast.success("Profile updated successfully!");
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Crestline | Update Profile</title>
      </Helmet>

      <div className="min-h-[calc(100vh-80px)] w-full mt-12 p-2">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center">
          <div className="text-4xl text-center font-mulish">
            Welcome,{" "}
            <span className="font-lexend">{displayName || "User"}</span>
          </div>
          <div className="size-40 rounded-full overflow-hidden mt-10 mb-4">
            <img
              src={photoURL}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                type="text"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                defaultValue={displayName || "Not available"}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                defaultValue={email || "Not available"}
                disabled
                {...register("email")}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-lg font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                id="photoUrl"
                type="text"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                defaultValue={photoURL}
                {...register("photoUrl")}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
