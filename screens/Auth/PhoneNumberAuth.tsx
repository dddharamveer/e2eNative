import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth/react-native";
import { auth } from "../../constants/firebase/auth";

const PhoneNumberAuth = () => {
  const login = () => {
    signOut(auth)
      .then(() => {
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text>PhoneNumberAuth</Text>
      <Button title="click" onPress={login} />
    </View>
  );
};

export default PhoneNumberAuth;

const styles = StyleSheet.create({});
