import {
  SafeAreaView,
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const HeaderHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HeaderHome</Text>
    </SafeAreaView>
  );
};

export default HeaderHome;
const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
