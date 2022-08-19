import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { getUser } from "../constants/firebase/dataQueries";

import { AuthContext } from "../store/authContext";
import { MainTabScreenProps } from "../types";

export const Header = ({
  navigation,
}: MainTabScreenProps<"CategoriesScreen">) => {
  const ctx = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {ctx.userData && ctx.userData.Name}
        </Text>
        <Text style={{ fontSize: 20 }}>Good Morning !</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image
          style={{
            borderWidth: 1,

            width: 40,
            height: 40,
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
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
  },
});
