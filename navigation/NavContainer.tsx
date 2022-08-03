import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { auth } from "../constants/firebase/auth";
import AuthProvider, { AuthContext } from "../store/authContext";
import AppLoading from "expo-app-loading";
import { onAuthStateChanged } from "firebase/auth/react-native";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
const NavContainer = () => {
  const { user } = useContext(AuthContext);

  let content = <Auth />;

  if (user) {
    content = <Main />;
  }
  return <NavigationContainer>{content}</NavigationContainer>;
};

export default NavContainer;
