import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Footer = () => {
  return (
    <View style={styles.terms}>
      <Text style={styles.FootersubTitle}>
        By clicking "Continue {"\n"}with Email/Apple/Google/Facebook" above you
        agree to Tasker's Terms of Service and Privacy Policy.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  terms: {},
  FootersubTitle: {
    textAlign: "center",
    color: "black",
    fontFamily: "Main-1",
  },
});
