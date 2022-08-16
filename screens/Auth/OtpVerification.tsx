import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { auth } from "../../constants/firebase/auth";
import {
  PhoneAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth/react-native";
import { fonts } from "../../constants/fonts";
import ImageContainer from "../../components/Container-Rounded-Image";
const OtpVerification = ({ route }) => {
  //TODO: check if user has come from phone verification screen
  const verificationId = route.params.verificationId;

  const [verificationCode, setVerificationCode] = React.useState();
  const [loading, setLoading] = React.useState(false);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        size="large"
        color="#0000ff"
      />
    );
  }
  return (
    <ImageContainer>
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
            setLoading(true);
            await signInWithCredential(auth, credential);
          } catch (err) {
            setLoading(false);
            console.log("someproblem");
          }
        }}>
        <Text style={{ color: "white", fontFamily: fonts.bold, fontSize: 17 }}>
          Submit
        </Text>
      </Pressable>
    </ImageContainer>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({});
