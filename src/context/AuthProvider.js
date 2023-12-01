import { createContext, useState, useEffect } from "react";

// Initialize the context with an initial value for auth
const AuthContext = createContext({ auth: {}, setAuth: () => {} });

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    // Store authentication information in localStorage whenever it changes
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  // Provide the auth and setAuth values in the context
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
