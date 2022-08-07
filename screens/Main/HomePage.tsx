import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import SortDropdown from "../../components/ui/SortDropdown";
import BrowseTasks from "../../components/BrowseTasks";

const HomePage = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SortDropdown />
          <SortDropdown />
          <SortDropdown />
        </ScrollView>
      </View>
      <View style={styles.body}>
        <BrowseTasks />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: { flex: 1 },
  header: { marginLeft: 20, backgroundColor: "white" },
});
