import { signOut } from "firebase/auth/react-native";
import React, { useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import AccountButton from "../../components/AccountButton";
import Button2 from "../../components/ui/Button-2";
import Button3 from "../../components/ui/Button-3";
import ButtonUi from "../../components/ui/ButtonsUi";
import { Colors } from "../../constants/Colors";
import { auth } from "../../constants/firebase/auth";
import { fonts } from "../../constants/fonts";
import { AuthContext } from "../../store/authContext";

const Account = ({ navigation }) => {
  const ctx = useContext(AuthContext);
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
      <View
        style={{
          height: 100,
          flex: 1,
          margin: 5,
          flexDirection: "row",
        }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 80, width: 80, borderRadius: 40 }}
            source={{ uri: ctx.userData && ctx.userData.profilePic }}
          />
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}>
            <Text style={{ color: "blue", marginTop: 5 }}>Edit</Text>
          </Pressable>
        </View>
        <View style={{ marginLeft: 15, alignItems: "flex-start" }}>
          <Text style={{ fontFamily: fonts.bold, fontSize: 25 }}>
            {ctx.userData && ctx.userData.Name}
          </Text>
          <Text style={{ fontFamily: fonts.bold }}>Ludhiana,Punjab</Text>
          <Text>{ctx.user.email}</Text>
        </View>
      </View>
      {/* 
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
      </View> */}
      <View style={{ marginVertical: 30 }}>
        <Button2
          onPress={SignOut}
          iconName="sign-out-alt"
          iconColor="white"
          backgroundColor={Colors.secondary}>
          Sign Out
        </Button2>
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
