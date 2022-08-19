import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import IconButton from "../../components/ui/IconButton";
import { Colors } from "../../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

const Chat = () => {
  const [text, onChangeText] = React.useState("");
  // const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/doodlebg.jpg")}
        // resizeMode="center"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.1,
        }}></ImageBackground>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginRight: 12 }}>
        <View style={{flex:1,
          flexDirection:'row', 
          justifyContent:'center', 
          alignItems:'center', 
          marginLeft:12}}>
          <FontAwesome name="camera" size={24} color="black" /> 
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Message"
          />
        </View>
        <IconButton
          name="angle-right"
          iconColor="white"
          color={Colors.secondary}
          size={24}
        />
      </View>
      {/* <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Numeric input here"
            keyboardType="numeric"
          /> */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    flex: 1,
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 45 / 2,
  },
});
