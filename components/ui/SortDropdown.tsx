import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { FontAwesome5 } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { fonts } from "../../constants/fonts";
import { Colors } from "../../constants/Colors";
const SortDropdown = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  return (
    <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
      buttonStyle={{
        elevation: 10,
        borderRadius: 5,
        marginHorizontal: 5,

        width: 170,
        backgroundColor: Colors.secondary,
      }}
      buttonTextStyle={{
        fontFamily: fonts.main,
        textAlign: "left",
        color: "white",
      }}
      defaultButtonText="Price"
      dropdownIconPosition="right"
      renderDropdownIcon={() => {
        return <FontAwesome5 name="chevron-down" size={16} color="white" />;
      }}
      dropdownStyle={{
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#22613bc1",
      }}
      rowStyle={{
        backgroundColor: "#22613bc1",
        borderBottomWidth: 0,
      }}
      rowTextStyle={{
        padding: 10,
        textAlign: "left",
        color: "#ffffff",
      }}
    />
  );
};

export default SortDropdown;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 15,
    flex: 1,
    width: 130,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6d689a",

    borderRadius: 10,
  },
});
