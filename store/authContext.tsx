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
  changeUserData: ({ profilePic }: { profilePic: any }) => void;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: { uid: "" },
  userData: {
    Name: "",
    profilePic: "",
  },
  changeUserData: () => {},
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
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    FetchUserData();
  }, [user]);

  const FetchUserData = async () => {
    const data = await getUser();
    setUserData(data);
  };

  const changeUserData = ({ profilePic }: { profilePic: any }) => {
    setUserData((prev: any) => ({ ...prev, profilePic }));
  };

  const value = {
    user,
    userData,
    changeUserData,
    logout,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
