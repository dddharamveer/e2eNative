import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import * as WebBrowser from "expo-web-browser";
import Footer from "../../components/FooterAuthentication";
import Button1 from "../../components/UI/Button-1";
import Button2 from "../../components/UI/Button-2";

import {
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth/react-native";
import { AuthStackScreenProps } from "../../types";

import * as Google from "expo-auth-session/providers/google";
import { auth } from "../../Firebase/firebaseConfig";
import Colors from "../../constants/Colors";
WebBrowser.maybeCompleteAuthSession();
const LandingPageAuth = ({ navigation }: AuthStackScreenProps<"Root">) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "151935304798-1avu661n8g42md5lu18ngu4t3e69hnqc.apps.googleusercontent.com",
  });

  const [user, setUser] = React.useState();

  const LoginNavigation = () => {
    navigation.navigate("LoginWithEmail");
  };
  const SignUpNavigation = () => {
    navigation.navigate("SignUpWithEmail");
  };

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoView}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/images/LandingPageImage.png")}
          />
        </View>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.Buttons}>
          <Button1
            backgroundColor={Colors.light.background}
            onPress={LoginNavigation}
            fontSize={16}
            marginTop={10}
          >
            Continue with Email
          </Button1>
          <Button2
            backgroundColor={Colors.light.background}
            onPress={() => navigation.navigate("PhoneAuthScreen")}
            fontSize={16}
            marginTop={20}
            iconName="phone-alt"
            iconColor="white"
          >
            Continue with phone
          </Button2>
          <Button2
            backgroundColor="black"
            fontSize={16}
            marginTop={20}
            iconName="apple"
            iconColor="white"
          >
            Continue with Apple
          </Button2>

          <Button2
            backgroundColor="#5583EC"
            fontSize={16}
            marginTop={20}
            onPress={() => {
              promptAsync();
            }}
            iconName="google"
            iconColor="white"
          >
            Continue with Google
          </Button2>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Pressable
            style={{ marginVertical: 10 }}
            onPress={SignUpNavigation}
            android_ripple={{ color: "#fff" }}
          >
            <Text style={{ fontFamily: "Light-1" }}>
              Don't have an account ?
              <Text
                style={{ color: Colors.light.background, fontFamily: "Main-1" }}
              >
                {" "}
                Sign Up
              </Text>
            </Text>
          </Pressable>
        </View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },

  header: {
    height: "45%",
    justifyContent: "center",
  },

  title: {
    fontSize: 48,
    color: "black",

    textAlign: "center",
  },
  logoView: {
    flex: 7 / 12,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    color: "black",
  },
  authContainer: {
    width: "100%",
  },

  Buttons: {},

  comment: {
    marginTop: "5%",
    color: "black",
    textAlign: "center",
  },
  authLogo: {
    marginBottom: "10%",
  },
});

export default LandingPageAuth;
