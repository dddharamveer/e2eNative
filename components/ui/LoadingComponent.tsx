import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const LoadingComponent = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({});
