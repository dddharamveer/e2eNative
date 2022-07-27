import { View, StyleSheet } from "react-native";
import { Colors } from "../contents/Colors";
import IconButton from "./ui/IconButton";

const ExterAuthIcons = () => {
  return (
    <View style={styles.logo}>
      <IconButton name="facebook" iconColor={Colors.Primary} color="white" size={24} />
      <IconButton name="google" iconColor={Colors.Primary} color="white" size={24} />
      <IconButton name="apple" iconColor={Colors.Primary} color="white" size={24} />
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
