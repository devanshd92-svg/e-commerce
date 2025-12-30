import { Navigate } from "react-router-dom";
import { useAuth } from "./Contextapi/AuthProvider";




const ProtectedRoutes = ({ children }) => {

  const { isAuthenticated, loading} =useAuth();

  // const token = localStorage.getItem("token");
  if (loading) return null ;
    
  
    
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
