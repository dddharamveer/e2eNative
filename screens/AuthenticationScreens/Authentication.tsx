import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { useState } from "react";
import Footer from "../../components/FooterAuthentication";
import { authErrorHandler } from "../../constants/auth-error-handler";
import ImageContainer from "../../components/Container-Rounded-Image";
import Button1 from "../../components/UI/Button-1";
import TextInputUi from "../../components/UI/TextInput";
import Colors from "../../constants/Colors";

const Authentication = ({
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
        <Button1
          backgroundColor={Colors.light.background}
          onPress={authHandler}
        >
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
  },
  inputs: {},
  title: {
    marginVertical: 20,
  },
  titleText: {
    color: "black",
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
  },

  forgotpasswordText: {
    marginVertical: 10,
    textAlign: "right",
  },
  button: {},
  footer: {
    marginTop: "10%",
  },
});

export default Authentication;
