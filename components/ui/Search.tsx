import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { fonts } from "../../constants/fonts";
const Search = () => {
  return (
    <View
      style={{
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
      }}>
      <TextInput
        placeholder="Search for a topic"
        style={{
          flex: 1,
          height: 50,
          borderRadius: 5,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderColor: "#ccc",
          fontFamily: fonts.bold,
        }}
      />
      <View
        style={{
          backgroundColor: "black",
          flex: 1 / 4,
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
        }}>
        <EvilIcons name="search" size={24} color="white" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
