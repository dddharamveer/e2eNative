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
import { Colors } from "../../constants/Colors";

const TabScreenTasks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 / 2 }}>
          <Button2
            TextColor
            borderButton
            iconName="sort"
            iconColor={Colors.secondary}>
            Sort by
          </Button2>
        </View>
        <View style={{ flex: 1 / 2 }}>
          <Button2
            TextColor
            borderButton
            onPress={() => {
              navigation.navigate("Filter");
            }}
            iconColor={Colors.secondary}
            iconName="filter">
            Filter
          </Button2>
        </View>
      </View>
      <View style={styles.body}>
        <BrowseTasks />
      </View>
    </View>
  );
};

export default TabScreenTasks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  body: { flex: 1 },
  header: {
    padding: 10,

    flexDirection: "row",
  },
});
