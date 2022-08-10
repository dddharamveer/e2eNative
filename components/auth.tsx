import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import TextInputUi from "./ui/TextInput";
import ButtonUi from "./ui/ButtonsUi";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/fonts";
import { useState } from "react";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import Footer from "./footer";
import { authErrorHandler } from "../constants/auth-error-handler";
import ImageContainer from "./Container-Rounded-Image";
import Button1 from "./ui/Button-1";

const Auth = ({
  type,
  size,
  auth,
  error,
}: {
  type: string;
  size: number;
  auth: (email: string, password: string) => {};
  error: string;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function emailHandler(text: string) {
    setEmail(text);
  }

  function passwordHandler(text: string) {
    setPassword(text);
  }
  function authHandler() {
    console.log(email);

    if (email?.trim().length === 0) {
      Alert.alert("emty email");
      return;
    }
    if (!email?.includes("@") && !email.includes(".com")) {
      Alert.alert("@ email");
      return;
    }
    if (password?.trim().length === 0) {
      Alert.alert("pass em");
      return;
    }
    if (password?.length! <= 6 && type === "Sign Up") {
      Alert.alert("length prob");
      return;
    }

    auth(email, password);
  }

  // { height: Dimensions.get("screen").height }

  return (
    <ImageContainer>
      {error && <Text style={{ color: "red" }}>{authErrorHandler(error)}</Text>}
      <View style={styles.title}>
        <Text style={styles.titleText}>{type}</Text>
      </View>
      <View style={styles.inputs}>
        {type === "Sign Up" && (
          <Text style={styles.account}>Create a new account</Text>
        )}
        <TextInputUi name="Email" onChangeText={emailHandler} />
        <TextInputUi name="Password" password onChangeText={passwordHandler} />
      </View>
      {type === "Log in" && (
        <Pressable>
          <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
        </Pressable>
      )}
      <View style={{ flex: 1 }}>
        <Button1 backgroundColor={Colors.secondary} onPress={authHandler}>
          {type == "Sign Up" ? "Sign Up" : "Log in"}
        </Button1>

        {type == "Sign Up" && (
          <View style={styles.footer}>
            <Footer />
          </View>
        )}
      </View>
    </ImageContainer>
  );
};

const styles = StyleSheet.create({
  inner: {
    backgroundColor: "white",
    flex: 1,
  },
  body: {
    padding: 20,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#9c9c9cff",
    borderBottomWidth: 0,
  },
  logoView: {
    aspectRatio: 2 / 1,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  account: {
    marginVertical: 20,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontFamily: fonts.main,
  },
  inputs: {},
  title: {
    marginVertical: 20,
  },
  titleText: {
    fontFamily: fonts.bold,

    color: "black",
    fontSize: 32,
  },

  forgotpasswordText: {
    marginVertical: 10,
    textAlign: "right",
    color: Colors.Primary50,
  },
  button: {},
  footer: {
    marginTop: "10%",
  },
});

export default Auth;
