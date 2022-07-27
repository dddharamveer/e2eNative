import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type IconButton = {
  name: any,
  color: string,
  size: number,
  iconColor: string,
  onPress: () => {}
}
const IconButton: React.FC<IconButton> = ({ name, color, size, iconColor, onPress }) => {
  return (
    <Pressable android_ripple={{ color: '#8c1818' }} style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <Ionicons style={styles.icon} name={name} size={size} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  icon: {},
});
