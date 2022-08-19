import { StyleSheet, View } from "react-native";

import { createAccountWithPassword } from "../../Firebase/authFucntions";
import Authentication from "./Authentication";

const SignUpWithEmail = () => {
  async function createAccount(email: string, password: string) {
    try {
      const user = await createAccountWithPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <Authentication error="" type="Sign Up" size={3} auth={createAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default SignUpWithEmail;
