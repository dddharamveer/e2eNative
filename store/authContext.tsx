import { onAuthStateChanged } from "firebase/auth/react-native";
import { createContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase/auth";

import { User } from "firebase/auth/react-native";
import { getUser } from "../constants/firebase/dataQueries";

type AuthContextType = {
  user: {
    uid: string;
  };
  userData: {
    Name: string;
    profilePic: string;
  };

  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: { uid: "" },
  userData: {
    Name: "",
    profilePic: "",
  },

  logout: () => {},
  isLoading: true,
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      userDa();
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const userDa = async () => {
    const data = await getUser();
    setUserData(data);
  };

  const value = {
    user,
    userData,

    logout,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
