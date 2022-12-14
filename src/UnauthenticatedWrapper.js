import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContextProvider";

const UnauthenticatedWrapper = () => {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default UnauthenticatedWrapper;
