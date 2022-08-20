import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { getUser } from "../constants/firebase/dataQueries";

import { AuthContext } from "../store/authContext";
import { MainTabScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const Header = ({
  navigation,
}: MainTabScreenProps<"CategoriesScreen">) => {
  const ctx = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={{ fontFamily: "Inter-Light", fontSize: 14 }}>
          Welcome back,
        </Text>
        <Text
          style={[
            {
              fontSize: 22,
              fontFamily: "Inter-Regular",
            },
          ]}
        >
          {ctx.userData && ctx.userData.Name}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image
          style={{
            borderWidth: 2,
            borderColor: Colors.light.background,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
          source={{
            uri: ctx.userData
              ? ctx.userData.profilePic
              : "https://images.unsplash.com/photo-1610559176044-d2695ca6c63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80",
          }}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
  },
  font: {
    fontFamily: "Main-1",
  },
});
