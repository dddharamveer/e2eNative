import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
