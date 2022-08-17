import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { fonts } from "../../constants/fonts";

const TextInputWithLabel = ({ placeHolder, children, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
      <TextInput
        placeholder={placeHolder}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 18,
  },
  label: {
    color: "grey",
    marginBottom: 10,
    fontFamily: fonts.main,
    fontSize: 15,
    textTransform: "uppercase",
  },
  textInput: {
    padding: 15,
    fontFamily: fonts.bold,
    backgroundColor: "white",
    height: 60,
    borderRadius: 4,
    borderWidth: 0.5,
  },
});
