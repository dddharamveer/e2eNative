import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button2 from "../../components/UI/Button-2";
import Colors from "../../constants/Colors";
import { auth } from "../../Firebase/firebaseConfig";

import { AuthContext } from "../../store/authContext";
import { MainTabScreenProps } from "../../types";

const AccountScreen = ({ navigation }: MainTabScreenProps<"AccountScreen">) => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 100,
            flex: 1,
            margin: 5,
            flexDirection: "row",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 40 }}
              source={{ uri: ctx.userData && ctx.userData.profilePic }}
            />
            <Pressable
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Text style={{ color: "blue", marginTop: 5 }}>Edit</Text>
            </Pressable>
          </View>
          <View style={{ marginLeft: 15, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 25, fontFamily: "Main-1" }}>
              {ctx.userData && ctx.userData.Name}
            </Text>
            <Text style={{ fontFamily: "Light-1" }}>Ludhiana,Punjab</Text>
            <Text style={{ fontFamily: "Light-1" }}>{ctx.user.email}</Text>
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
            backgroundColor={Colors.light.background}
          >
            Sign Out
          </Button2>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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

export default AccountScreen;
