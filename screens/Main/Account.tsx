import { signOut } from "firebase/auth/react-native";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import AccountButton from "../../components/AccountButton";
import ButtonUi from "../../components/ui/ButtonsUi";
import { auth } from "../../constants/firebase/auth";
import { AuthContext } from "../../store/authContext";

const Account = () => {
  const { logout } = useContext(AuthContext);
  const SignOut = () => {
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
    <ScrollView style={styles.container}>
      <Text style={styles.main}>Account Settings</Text>
      <View>
        <AccountButton text="Payments Methods" />
        <AccountButton text="Transactions" />
        <AccountButton text="Change Password" />
      </View>

      <Text style={styles.main}>Help and Support</Text>
      <View>
        <AccountButton text="Frequently Asked Questions" />
        <AccountButton text="Community Guidelines" />
        <AccountButton text="Contact Us" />
      </View>

      <Text style={styles.main}>Safety</Text>
      <View>
        <AccountButton text="Insurance" />
        <AccountButton text="Legal" />
        <View style={styles.signOut}>
          <ButtonUi color="black" backgroundColor="black" onPress={SignOut}>
            Sign Out
          </ButtonUi>
        </View>
      </View>
    </ScrollView>
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
    marginVertical: 10,
  },
  signOut: {
    height: 150,
  },
});

export default Account;
