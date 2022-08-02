import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
import { onAuthStateChanged } from "firebase/auth/react-native";

import { auth } from "./constants/firebase/auth";
import Auth from "./navigation/Auth";
import Main from "./navigation/Main";
import { rubik } from "./constants/fonts";

export default function App() {
  const [user, setuser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuser(true);
    } else {
      setuser(false);
    }
  });
  let [fontsLoaded] = useFonts(rubik);

  if (!fontsLoaded) {
    return <Text>dsaf</Text>;
  }

  let content = <Auth />;

  if (user) {
    content = <Main />;
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <NavigationContainer>{content}</NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
