import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { auth } from "../../constants/firebase/auth";
import {
  PhoneAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth/react-native";
import { fonts } from "../../constants/fonts";
const OtpVerification = ({ route }) => {
  //TODO: check if user has come from phone verification screen
  const verificationId = route.params.verificationId;
  const [verificationCode, setVerificationCode] = React.useState();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ height: "22%" }}>
        <Image
          source={require("./blob-scene-haikei.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View
        style={{
          marginTop: "-10%",
          padding: 35,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white",
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 23,
              fontFamily: fonts.bold,
            }}>
            Enter code sent
          </Text>
          <Text
            style={{
              fontSize: 23,

              fontFamily: fonts.bold,
            }}>
            to your phone
          </Text>
          <Text
            style={{
              color: "#9e9e9eff",
              fontFamily: fonts.bold,
              marginVertical: 15,
            }}>
            We sent it to the number{" "}
            <Text style={{ color: "black" }}>+91 999988980</Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <TextInput
            style={{ borderColor: "red", fontSize: 30 }}
            autoFocus
            placeholder="123456"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            editable={!!verificationId}
            onChangeText={(text) => setVerificationCode(text)}
          />
        </View>
        <Pressable
          android_ripple={{ color: "#9f9b9bff", radius: 160 }}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            backgroundColor: "#009473",
            borderRadius: 10,
            marginVertical: 20,
          }}
          onPress={async () => {
            try {
              const credential = PhoneAuthProvider.credential(
                verificationId,
                verificationCode,
              );
              await signInWithCredential(auth, credential);
            } catch (err) {
              console.log("someproblem");
            }
          }}>
          <Text
            style={{ color: "white", fontFamily: fonts.bold, fontSize: 17 }}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({});
