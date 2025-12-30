import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("email");

    if (savedToken) {
      setToken(savedToken);
      setEmail(savedEmail);
    }
    setLoading(false);
  }, []);

  const login =(token,email)=>{
    localStorage.setItem("token",token)
    localStorage.setItem("email",email)
    setToken(token)
    setEmail(email)
  }

  const logout =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    setToken(null)
    setEmail(null)
  }

 

  return (
    <AuthContext.Provider
      value={{
        token,
        email,
        isAuthenticated: !!token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
