import React from "react";
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
    const { isAuthenticated, user, setUser } = useContext(AuthContext);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    let content = <Auth />;

    if (isAuthenticated) {
        content = <Main />;
    }
    return <NavigationContainer>{content}</NavigationContainer>;
};

export default NavContainer;

const styles = StyleSheet.create({});
