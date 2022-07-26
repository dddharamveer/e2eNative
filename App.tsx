import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import HomePage from "./screens/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
