import { StyleSheet, Dimensions, StatusBar } from "react-native";
import Auth from "../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LoginWithEmail } from "../constants/firebase/auth";
const Login = () => {
  async function LoginHandler(email, password) {
    const user = await LoginWithEmail(email, password);
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{
        backgroundColor: "white",
      }}>
      <Auth type="Log in" size={4.3} auth={LoginHandler} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
export default Login;
