import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/ui/IconButton";
import ExterAuthIcons from "../components/ExternelAuth";
import { Colors } from "../contents/Colors";
import { fonts } from "../contents/fonts";

const HomePage = ({ navigation }: { navigation: any }) => {
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [
    navigation.navigate('SignUp')
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasker</Text>
        <View style={styles.logoView}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../assets/image.png")}
          />
        </View>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.Buttons}>
          <ButtonUi
            backgroundColor={Colors.secondary}
            color="black"
            onPress={LoginNavigation}>
            Log in
          </ButtonUi>
          <ButtonUi
            fill
            onPress={SignUpNavigation}
            backgroundColor={Colors.secondary}
            color="white">
            Sign up
          </ButtonUi>
          <Text style={styles.comment}>or continue with</Text>
        </View>
<View style={styles.authLogo}>
  <ExterAuthIcons />
</View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,

    flex: 1,
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 48,
    color: "black",
    fontFamily: fonts.main,
    textAlign: "center",
  },
  logoView: {
    flex: 8 / 12,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    color: "black",
  },
  authContainer: {
    marginTop: "15%",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
  },

  Buttons: {
    flex: 8 / 12,
    justifyContent: "space-around",
  },

  comment: {
    fontFamily:fonts.main,
    marginTop: "10%",
    color: "black",
    textAlign: "center",
  },
  authLogo: {},
  terms: {},
  FootersubTitle: {
    textAlign: "center",
    color: "black",
  },
});

export default HomePage;