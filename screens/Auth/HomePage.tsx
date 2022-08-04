import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import ButtonUi from "../../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../../components/ui/IconButton";
import ExterAuthIcons from "../../components/ExternelAuth";
import { Colors } from "../../constants/Colors";
import { fonts } from "../../constants/fonts";
import Footer from "../../components/footer";

const HomePage = ({ navigation }: { navigation: any }) => {
  const height = Dimensions.get("screen").height;
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [navigation.navigate("SignUp")];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoView}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/image.png")}
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
        <Footer />
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
    marginTop: "10%",

    flex: 1,
    width: "100%",
  },

  Buttons: {
    justifyContent: "center",
  },

  comment: {
    fontFamily: fonts.main,
    marginTop: "5%",
    color: "black",
    textAlign: "center",
  },
  authLogo: {
    marginBottom: "10%",
  },
});

export default HomePage;
