import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { fonts } from "../../constants/fonts";

const Button1 = ({
  onPress,
  fontSize,
  children,
  backgroundColor,
  marginVertical,
  marginTop,
}: {
  backgroundColor: string;
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#9f9b9bff", radius: 160 }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: backgroundColor,
        borderRadius: 6,
        marginVertical: marginVertical,
        marginTop: marginTop,
      }}
      onPress={onPress}>
      <Text
        style={{ color: "white", fontFamily: fonts.bold, fontSize: fontSize }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button1;
