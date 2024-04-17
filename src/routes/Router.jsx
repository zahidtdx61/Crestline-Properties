import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import ViewDetails from "../pages/ViewDetails";
import Wishlist from "../pages/Wishlist";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "view-details/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist />
          </PrivateRoutes>
        ),
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
