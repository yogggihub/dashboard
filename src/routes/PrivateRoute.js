import { Navigate } from "react-router-dom";
import {login} from "../utils/login"
// for Authorization
const PrivateRoute = ({ children }) => {
  const {access,id, role} = login();
  if (access && role==="Admin") return children;
  return <Navigate to="/AccessDenied" replace />;
};
export default PrivateRoute;
