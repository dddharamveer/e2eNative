import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import TextInputWithLabel from "../../components/ui/TextInputWithLabel";

const FilterScreen = () => {
  return (
    <View style={{ padding: 25 }}>
      <TextInputWithLabel placeHolder="Select your prefreed categories">
        Categories
      </TextInputWithLabel>
      <TextInputWithLabel placeHolder="Shastri nagar,Ludhiana">
        Nearby places
      </TextInputWithLabel>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
