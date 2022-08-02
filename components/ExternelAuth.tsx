import { View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import CustomIcon from "./ui/customIcon";
import IconButton from "./ui/IconButton";

const ExterAuthIcons = () => {
  return (
    <View style={styles.logo}>
      <IconButton
        name="facebook"
        iconColor={"#4267B2"}
        color="white"
        size={28}
      />
      <CustomIcon loc={require("../assets/google-logo-9808.png")} />
      <IconButton name="apple" iconColor={"black"} color="white" size={28} />
    </View>
  );
};
export default ExterAuthIcons;
const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",

    justifyContent: "space-around",

    paddingHorizontal: 55,
  },
});
