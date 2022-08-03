import { onAuthStateChanged } from "firebase/auth/react-native";
import { createContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase/auth";

export const AuthContext = createContext({
  user: null,
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
