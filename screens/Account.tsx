import { signOut } from "firebase/auth/react-native";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { auth } from "../constants/firebase/auth";
import { AuthContext } from "../store/authContext";

const Account = () => {
  const { logout } = useContext(AuthContext);
  const login = () => {
    signOut(auth)
      .then(() => {
        logout();
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Account Settings</Text>
      <View>
        <Text style={styles.text}>Payments Methods</Text>
        <Text style={styles.text}>Transactions</Text>
        <Text style={styles.text}>Change Password</Text>
      </View>

      <Text style={styles.main}>Help and Support</Text>
      <View>
        <Text style={styles.text}>Frequently Asked Questions</Text>
        <Text style={styles.text}>Community Guidelines</Text>
        <Text style={styles.text}>Contact Us</Text>
      </View>

      <Text style={styles.main}>Safety</Text>
      <View>
        <Text style={styles.text}>Insurance</Text>

        <ButtonUi color="black" backgroundColor="black" onPress={login}>
          Sign Out
        </ButtonUi>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  main: {
    fontSize: 24,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    backgroundColor: "#EAE6E680",
    height: 36,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 4,
  },
});

export default Account;
