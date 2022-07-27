import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(255, 106, 25, 1)",
          "rgba(179, 62, 0, 1)",
          "rgba(179, 0, 44, 1)",
        ]}
        style={styles.background}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: "10%" }}>
          <Text style={styles.title}>Tasker</Text>
          <Text style={[styles.subTitle, { fontSize: 14 }]}>
            Get Things Done By Us...
          </Text>
        </View>
        <Image source={require("../assets/item1.png")} />
      </View>

      <View style={styles.button}>
        <ButtonUi color="white" backgroundColor="white" onPress={() => {}}>
          Log in
        </ButtonUi>
        <ButtonUi
          fill
          color="#FF6A19"
          backgroundColor="white"
          onPress={() => {}}
        >
          Sign Up
        </ButtonUi>
        <Text style={[styles.subTitle, { fontSize: 16, marginTop: "3%" }]}>
          or continue with
        </Text>
        {/* Icons */}
        <Text style={{ color: "white" }}>Icons</Text>
        <Text style={[styles.subTitle, { fontSize: 13, paddingTop: 8 }]}>
          By signin up, I agree to Tasker’s Terms & Conditions, & Community
          Guildelines. Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "10%",
    paddingTop: "37%",
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  title: {
    fontSize: 48,
    color: "white",
  },
  subTitle: {
    color: "white",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    paddingRight: "10%",
  },
});

export default HomePage;
