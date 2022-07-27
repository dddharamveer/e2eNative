import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type button = {
  backgroundColor: string;
  color: string;
  fill?: boolean;
  onPress: () => void;
};

const ButtonUi = ({
  backgroundColor,
  color,
  fill,
  children,
  onPress,
}: React.PropsWithChildren<button>) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.Button,
        fill
          ? { backgroundColor: backgroundColor }
          : { borderWidth: 2, borderColor: backgroundColor },
      ]}
    >
      <View>
        {/* @ts-ignore */}
        <Text style={[styles.text, color && { color: color }]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonUi;

const styles = StyleSheet.create({
  Button: {
    marginTop: 10,
    width: "100%",
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
});
