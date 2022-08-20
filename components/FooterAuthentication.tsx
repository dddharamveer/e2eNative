import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Footer = () => {
  return (
    <View style={styles.terms}>
      <Text style={styles.FootersubTitle}>
        By clicking above you agree to App's Terms of Service and Privacy
        Policy.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  terms: {
    margin: 10,
  },
  FootersubTitle: {
    textAlign: "center",
    color: "black",
  },
});
