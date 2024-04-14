import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import PropTypes from "prop-types";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {return <Loader />}

  if (!user) {
    return <Navigate to="/sign-in" state={location.pathname || "/"} />;
  }

  return <>{children}</>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
