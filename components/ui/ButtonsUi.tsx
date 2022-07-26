import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonUi = ({ backgroundColor, color, fill, children, onPress }) => {
  return (
    
    <Pressable
      onPress={onPress}
      style={[
        styles.Button,
        fill
          ? { backgroundColor: backgroundColor }
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
    flex:1,
  width:"100%",
  height:"100%",
    marginTop: 10,
   
   
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    
  },
});
