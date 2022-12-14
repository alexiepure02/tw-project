import { Navigate, Outlet } from "react-router-dom";

import { checkIfAuthenticated } from "./functions/authentication";

const PrivateRoutes = () => {
  const isAuthenticated = checkIfAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
