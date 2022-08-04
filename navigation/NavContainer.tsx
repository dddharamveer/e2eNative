import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { auth } from "../constants/firebase/auth";
import AuthProvider, { AuthContext } from "../store/authContext";
import AppLoading from "expo-app-loading";
import { onAuthStateChanged } from "firebase/auth/react-native";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import * as SplashScreen from "expo-splash-screen";
const NavContainer = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  let content = <Auth />;
  if (user) {
    content = <Main />;
  }
  return <NavigationContainer>{content}</NavigationContainer>;
};

export default NavContainer;
