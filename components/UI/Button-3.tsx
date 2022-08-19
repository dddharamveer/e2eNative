import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const Button3 = ({
  text,
  color,
  backgroundColor,
  borderColor,
  time,
  icon,
  onPress,
}: {
  text?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  time?: string;
  icon?: any;
  onPress?: () => void;
}) => {
  return icon ? (
    <View style={[styles.timeBtn, { backgroundColor, borderColor }]}>
      <Pressable style={{ alignItems: "center" }} onPress={onPress}>
        {icon && icon}
        <Text style={{ color, fontSize: 14, marginTop: 6 }}>{text}</Text>
        {time && <Text style={{ color, fontSize: 11 }}>{time}</Text>}
      </Pressable>
    </View>
  ) : (
    <Pressable
      onPress={onPress}
      style={{ flex: 1, margin: 5, paddingVertical: 5 }}
    >
      <Text
        style={[
          styles.text,
          { color, backgroundColor, borderColor, padding: 5, flex: 1 },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button3;

const styles = StyleSheet.create({
  timeBtn: {
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    justifyContent: "center",
    width: 90,
    height: 90,
    marginRight: 10,
  },
  text: {
    paddingVertical: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 13.5,
    borderRadius: 5,
    textTransform: "uppercase",
    borderWidth: 1,
  },
});
