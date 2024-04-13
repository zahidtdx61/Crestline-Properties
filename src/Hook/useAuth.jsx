import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
