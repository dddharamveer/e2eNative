import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { fonts } from "../../constants/fonts";

const Button2 = ({
  TextColor,
  onPress,
  fontSize,
  children,
  backgroundColor,
  marginVertical,
  marginTop,
  iconName,
  iconColor,
  borderButton,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#9f9b9bff", radius: 160 }}
      style={[
        {
          flexDirection: "row",

          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: backgroundColor,
          borderRadius: 6,
          marginVertical: marginVertical,
          marginTop: marginTop,
        },
        borderButton && {
          elevation: 2,
          backgroundColor: "white",
          marginHorizontal: 10,
          marginVertical: 7,
        },
      ]}
      onPress={onPress}>
      <View style={{ marginHorizontal: 10 }}>
        <FontAwesome5 name={iconName} size={18} color={iconColor} />
      </View>
      <Text
        style={[
          { fontFamily: fonts.bold, fontSize: fontSize },
          TextColor ? { color: "black" } : { color: "white" },
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button2;

const styles = StyleSheet.create({});
