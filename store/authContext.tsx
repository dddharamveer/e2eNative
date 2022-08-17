import { onAuthStateChanged } from "firebase/auth/react-native";
import { createContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase/auth";

import { User } from "firebase/auth/react-native";

type AuthContextType = {
  user: {
    uid: string;
  };
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: { uid: "" },
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
