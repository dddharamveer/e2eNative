import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonUi from "./components/ui/ButtonsUi";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";

export default function App() {
  
  return (
    <View style={styles.container}>
    <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 flex:1
  },
});
