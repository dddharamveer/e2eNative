import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonUi = ({ backgroundColor, color, fill, children, onPress }) => {
  return (

    <Pressable
      android_ripple={{ color: '#cb646493' }}
      onPress={onPress}
      style={[
        styles.Button,
        fill
          ? { backgroundColor: backgroundColor, elevation: 3, }
          : { borderWidth: 2, borderColor: backgroundColor },
      ]}
    >
      <View>
        <Text style={[styles.text, color && { color: color }]}>{children}</Text>
      </View>
    </Pressable>

  );
};

export default ButtonUi;

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 10,
padding:15,


    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,

  },
});
