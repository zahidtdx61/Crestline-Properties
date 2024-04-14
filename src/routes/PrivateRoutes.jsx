import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/sign-in" state={location.pathname || "/"} />;
  }

  return <>{children}</>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
