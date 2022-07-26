import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";


const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Tasker</Text>
        <Text style={styles.subTitle}>Get Things Done By Us...</Text>
      </View>
      <View style={styles.Buttons}>
        <ButtonUi backgroundColor="black" color="black">Log in</ButtonUi>
        <ButtonUi fill backgroundColor="black" color="white">Sign up</ButtonUi>
        <Text style={[styles.subTitle, { fontSize: 16 }]}>
          or continue with
        </Text>
        {/* Icons */}
        <Text style={{ color: "white" }}>Icons</Text>
        <Text style={[styles.subTitle, { fontSize: 13 }]}>
          By signin up, I agree to Tasker’s Terms & Conditions, & Community
          Guildelines. Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 48,
    color: "white",
  },
  subTitle: {
    color: "white",
  },

  container: {
    backgroundColor: "#FF6A19",
    marginTop: 50,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  Buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4 / 12
  }
});

export default HomePage;
