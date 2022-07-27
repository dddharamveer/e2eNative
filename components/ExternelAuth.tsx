import { View, StyleSheet } from "react-native";
import IconButton from "./ui/IconButton";

const ExterAuthIcons = () => {
  return (
    <View style={styles.logo}>
      <IconButton name="logo-facebook" color="white" size={24} />
      <IconButton name="logo-google" color="white" size={24} />
      <IconButton name="logo-apple" color="white" size={24} />
    </View>
  );
};
export default ExterAuthIcons
const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",

    justifyContent: "space-around",

    paddingHorizontal: 55,
  },
});
