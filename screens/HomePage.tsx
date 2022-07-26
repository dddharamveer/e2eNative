import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import LinearGradient from "react-native-linear-gradient";

const HomePage = () => {
  return (
    // <LinearGradient
    //   colors={["#B3002C", "#B33E00", "#FF6A19"]}
    //   style={{ flex: 1 }}
    // >
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Tasker</Text>
        <Text style={styles.subTitle}>Get Things Done By Us...</Text>
      </View>

      <View style={styles.button}>
        <ButtonUi color="white" backgroundColor="white">
          Log in
        </ButtonUi>
        <ButtonUi fill color="#FF6A19" backgroundColor="white">
          Sign Up
        </ButtonUi>
        <Text style={[styles.subTitle, { fontSize: 16 }]}>
          or continue with
        </Text>
        {/* Icons */}
        <Text style={{ color: "white" }}>Icons</Text>
        <Text style={[styles.subTitle, { fontSize: 13 }]}>
          By signin up, I agree to Tasker’s Terms & Conditions, & Community
          Guildelines. Privacy Policy.
        </Text>
      </View>
    </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "10%",
    paddingTop: "37%",
    backgroundColor: "#FF6A19",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 48,
    color: "white",
  },
  subTitle: {
    color: "white",
  },
  button: {
    alignItems: "center",
  },
});

export default HomePage;
