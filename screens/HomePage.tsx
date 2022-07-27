import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/ui/IconButton";
import ExterAuthIcons from "../components/ExternelAuth";

const HomePage = ({ navigation }) => {
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [
    navigation.navigate('SignUp')
  ]
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#EC8044", "#B33E00", "#730903"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Tasker</Text>
        <Text style={styles.subTitle}>Get Things Done By Us...</Text>
      </View>

      <View style={styles.authContainer}>
        <View style={styles.Buttons}>
          <ButtonUi backgroundColor="white" color="white" onPress={LoginNavigation}>
            Log in
          </ButtonUi>
          <ButtonUi fill onPress={SignUpNavigation} backgroundColor="white" color="#6e381b">
            Sign up
          </ButtonUi>
          <Text style={styles.comment}>or continue with</Text>
        </View>

        {/* Google or faceicon login */}
        <ExterAuthIcons />
        <View style={styles.terms}>
          <Text style={styles.subTitle}>
            By signin up, I agree to Tasker’s{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Terms & Conditions
            </Text>
            , & Community Guildelines. Privacy Policy.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    color: "white",
  },
  subTitle: {
    color: "white",
    textAlign: "center",
  },

  container: {
    backgroundColor: "#FF6A19",

    paddingHorizontal: 30,
    paddingVertical: 40,
    flex: 1,
  },
  authContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Buttons: {
    justifyContent: "center",
    alignItems: "center",
    flex: 7 / 12,
  },
  comment: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
  },
  terms: {
    marginTop: 20,
  },
});

export default HomePage;
