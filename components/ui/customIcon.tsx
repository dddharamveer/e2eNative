import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomIcon = ({ loc }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <Image source={loc} style={styles.image} />
    </Pressable>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    elevation: 4,
    backgroundColor: "white",
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: "50%",
    height: "50%",
  },
});
