import { StyleSheet, View } from "react-native";
import React from "react";

import BrowseTasks from "../../components/BrowseTasks";
import Button2 from "../../components/UI/Button-2";
import { MainTabScreenProps } from "../../types";

const BrowseTasksScreen = ({
  navigation,
}: MainTabScreenProps<"BrowseTasks">) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 / 2 }}>
          <Button2 TextColor borderButton iconName="sort">
            Sort by
          </Button2>
        </View>
        <View style={{ flex: 1 / 2 }}>
          <Button2
            TextColor
            borderButton
            iconName="filter"
            onPress={() => {
              navigation.navigate("FilterScreen");
            }}
          >
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

export default BrowseTasksScreen;

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
