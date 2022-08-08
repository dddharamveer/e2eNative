import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { fonts } from "../../constants/fonts";

const Button2 = ({
  onPress,
  fontSize,
  children,
  backgroundColor,
  marginVertical,
  marginTop,
  iconName,
  iconColor,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#9f9b9bff", radius: 160 }}
      style={{
        flexDirection: "row",

        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: backgroundColor,
        borderRadius: 6,
        marginVertical: marginVertical,
        marginTop: marginTop,
      }}
      onPress={onPress}>
      <View style={{ marginHorizontal: 10 }}>
        <FontAwesome5 name={iconName} size={18} color={iconColor} />
      </View>
      <Text
        style={{ color: "white", fontFamily: fonts.bold, fontSize: fontSize }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button2;

const styles = StyleSheet.create({});
