import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import SortDropdown from "../../components/ui/SortDropdown";
import BrowseTasks from "../../components/BrowseTasks";
import Button2 from "../../components/ui/Button-2";
import { EvilIcons } from "@expo/vector-icons";
import { fonts } from "../../constants/fonts";

const HomePage = ({}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
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
      </KeyboardAvoidingView>
      {/* <View style={styles.header}>
        <View style={{ flex: 1 / 2 }}>
          <Button2 TextColor borderButton iconName="sort">
            Sort by
          </Button2>
        </View>
        <View style={{ flex: 1 / 2 }}>
          <Button2 TextColor borderButton iconName="filter">
            Filter
          </Button2>
        </View>
      </View> */}
      <View style={styles.body}>
        <BrowseTasks />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  body: { flex: 1 },
  header: {
    padding: 10,

    backgroundColor: "#cac8c8",
    flexDirection: "row",
  },
});
