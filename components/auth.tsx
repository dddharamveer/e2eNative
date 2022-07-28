import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import TextInputUi from "./ui/TextInput";
import ButtonUi from "./ui/ButtonsUi";
import colors from "../Constants/colors";

const Auth = ({type}) => {
  return (
    <View style={styles.inner}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{type}</Text>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.account}>{type==="Sign Up"?"Create a new account":"Welcome"}</Text>

        <TextInputUi name="Email" password={undefined} />

        <TextInputUi name="Password" password />
      </View>
      <View style={styles.button}>
        <ButtonUi
          fill
          color="white"
          backgroundColor={colors.primary500}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}>
          Sign up
        </ButtonUi>
      </View>

      {type==="Log in" &&<Pressable>
        <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
      </Pressable>}
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    margin: 25,
  },
  account: {
    marginVertical: 12,
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  inputs: {},
  title: {
    marginVertical: "10%",
  },
  titleText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
  },
  button: {
    height: "10%",
  },
  forgotpasswordText: {
    textAlign: "right",
    color: "blue",
  },
});

export default Auth;
