import { StyleSheet, View, ActivityIndicator } from "react-native";

import { useState } from "react";
import Authentication from "./Authentication";
import LoadingScreen from "../../components/UI/LoadingScreen";
import { LoginWithEmail } from "../../Firebase/authFucntions";

const LoginWithEmailScreen = () => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  async function LoginHandler(email: string, password: string) {
    try {
      setLoading(true);
      const user = await LoginWithEmail(email, password);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <Authentication
        type="Log in"
        size={4.3}
        auth={LoginHandler}
        error={error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default LoginWithEmailScreen;
