import { createContext, useState, useEffect, useContext } from "react";

// Initialize the context with an initial value for auth
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    // Store authentication information in localStorage whenever it changes
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  // Provide the auth and setAuth values in the context
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
