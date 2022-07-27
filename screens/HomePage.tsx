import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/ui/IconButton";
import ExterAuthIcons from "../components/ExternelAuth";

const HomePage = ({ navigation }: { navigation: any }) => {
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [
    navigation.navigate('SignUp')
  ]
  return (
    <LinearGradient
      colors={[
        "rgba(255, 106, 25, 1)",
        "rgba(179, 62, 0, 1)",
        "rgba(179, 0, 44, 1)",
      ]}
      style={styles.container}
    >
      <View style={[styles.header, {flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%'}]}>
        <View>
          <Text style={styles.title}>Tasker</Text>
          <Text style={styles.subTitle}>Get Things Done By Us...</Text>
        </View>
        <Image source={require('../assets/item1.png')} />
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
          <Text style={styles.FootersubTitle}>
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
    flex: 6 / 12,
    justifyContent: 'center'
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
  },
  FootersubTitle: {
    textAlign: 'center'
    , color: "white",
  }
  ,
  container: {
    backgroundColor: "#FF6A19",

    paddingLeft: 30,
    paddingVertical: 40,
    flex: 1,
  },
  authContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 30,
  },
  Buttons: {
    justifyContent: "center",
    alignItems: "center",
    flex: 4 / 12,
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