import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonUi from "../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/ui/IconButton";
import ExterAuthIcons from "../components/ExternelAuth";
import colors from "../Constants/colors"

const HomePage = ({ navigation }: { navigation: any }) => {
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [
    navigation.navigate('SignUp')
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasker</Text>
        <Text style={styles.subTitle}>Get Things Done By Us...</Text>
      </View>
      <View style={styles.authContainer}>
      <View style={styles.Buttons}>
                  <ButtonUi backgroundColor={colors.primary500} color="black" onPress={LoginNavigation}>
            Log in
          </ButtonUi>
          <ButtonUi fill onPress={SignUpNavigation} backgroundColor={colors.primary500} color="white">
            Sign up
          </ButtonUi>
                  <Text style={styles.comment}>or continue with</Text>
          </View>
        <View style={styles.logo}>
          <ExterAuthIcons />
        </View>

        <View style={styles.terms}>
          <Text style={styles.FootersubTitle}>
            By signin up, I agree to Tasker’s <Text style={{ textDecorationLine: "underline" }}>Terms & Conditions
            </Text>
            , & Community Guildelines. Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  margin:30,
    
    flex: 1,
  },

  header: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 48,
    color: "black",
  },
  subTitle: {
    color: "black",
  },
  authContainer: {
    flex: 1,
    width: "100%",
justifyContent:'flex-end'
 
    
  },

  Buttons:{
    flex:9/12,
    justifyContent:'space-around'
  },

  comment: {
    marginVertical:10,
    color: "black",
    textAlign: "center",
  },

  logo: { marginVertical:15 },
  terms: {
   
   marginVertical:10
  },
  FootersubTitle: {
    textAlign: "center",
    color: "black",
  },

});

export default HomePage;