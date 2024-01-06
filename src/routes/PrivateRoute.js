import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const access = true;
  if (access) return children;
  return <Navigate to="/AccessDenied" replace />;
};
export default PrivateRoute;
