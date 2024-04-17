import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import WishlistProvider from "./WishlistProvider/WishlistProvider.jsx";
import router from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
          <Toaster />
        </WishlistProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
