import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Auth from "../../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect } from "react";
import { createAccountWithPassword } from "../../constants/firebase/auth";
import Footer from "../../components/footer";

const SignUp = () => {
  const screenHeight = Dimensions.get("screen").height;
  const windowHeight = Dimensions.get("window").height;
  console.log("scrren" + screenHeight);

  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight!;
  async function createAccount(email, password) {
    try {
      const user = await createAccountWithPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <KeyboardAwareScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        backgroundColor: "white",
      }}>
      <Auth type="Sign Up" size={3} auth={createAccount} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
export default SignUp;
