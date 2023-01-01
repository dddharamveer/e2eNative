import { onAuthStateChanged } from "firebase/auth/react-native";
import React, { createContext, useEffect, useState } from "react";
import { getUser } from "../Firebase/dataQueries";

// import { getUser } from "../constants/firebase/dataQueries";
import { auth } from "../Firebase/firebaseConfig";

type AuthContextType = {
  user: {
    uid: string;
    email: string;
  };
  userData: {
    Name: string;
    profilePic: string;
    uid : string;
  };
  changeUserData: ({ profilePic }: { profilePic: any }) => void;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: { uid: "", email: "" },
  userData: {
    Name: "",
    profilePic: "",
    uid : "",
    
  },
  changeUserData: () => {},
  logout: () => {},
  isLoading: true,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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
