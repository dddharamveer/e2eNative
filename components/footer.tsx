import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Footer = () => {
  return (
    <View style={styles.terms}>
      <Text style={styles.FootersubTitle}>
        By signin up, I agree to Tasker’s{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          Terms & Conditions
        </Text>
        , & Community Guildelines. Privacy Policy.
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
  },
});
