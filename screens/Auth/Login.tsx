import {
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Auth from "../../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "../../constants/Colors";
import { LoginWithEmail } from "../../constants/firebase/auth";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  async function LoginHandler(email, password) {
    try {
      setLoading(true);
      const user = await LoginWithEmail(email, password);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  if (loading) {
    return (
      <View
        style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color={Colors.secondary} />
      </View>
    );
  }
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      
      contentContainerStyle={{
        backgroundColor: "white",
      }}>
      <Auth type="Log in" size={4.3} auth={LoginHandler} error={error} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
export default Login;
