import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import TextInputUi from "./ui/TextInput";
import ButtonUi from "./ui/ButtonsUi";
import { Colors } from "../contents/Colors";
import { fonts } from "../contents/fonts";

const Auth: React.FC<{ type: string ,size:number}> = ({ type,size }) => {
  return (
    <View style={styles.inner}>
      <View style={styles.logoView}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/image1.png")}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{type}</Text>
        </View>
        <View style={styles.inputs}>
          {type === "Sign Up" && (
            <Text style={styles.account}>
              Create a new account
            </Text>
          )}
          <TextInputUi name="Email" password={undefined} />
          <TextInputUi name="Password" password />
        </View>
        <View style={{flex:size/8}}>
        
        {type === "Log in" && (
          <Pressable>
            <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
          </Pressable>
        )}
          <ButtonUi
            fill
            color="white"
            backgroundColor={Colors.secondary}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}>
          {type=="Sign Up"?"Sign Up":"Log in"}
          </ButtonUi>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    backgroundColor:'white',
    flex: 1,
  },
  body: {
    padding:20,
    flex: 1,
    elevation:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoView: {
    flex: 5/ 12,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  account: {
    marginVertical:20,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontFamily: fonts.main,
  },
  inputs: {},
  title: {
    marginVertical:20
  },
  titleText: {
    fontFamily: fonts.bold,

    color: "black",
    fontSize: 32,
  },

  forgotpasswordText: {
    marginVertical:10,
    textAlign: "right",
    color: Colors.Primary50,
  },
});

export default Auth;
