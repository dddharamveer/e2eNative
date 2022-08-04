import { onAuthStateChanged } from "firebase/auth/react-native";
import { createContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase/auth";
export const AuthContext = createContext({
  user: null,
  logout: () => {},
  isLoading: true,
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    logout,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
