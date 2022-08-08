import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import TextInputUi from "../../components/ui/TextInput";
import { auth } from "../../constants/firebase/auth";
import {
  PhoneAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth/react-native";
import { initializeApp, getApp } from "firebase/app";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import firebaseApp from "../../constants/firebase/firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../constants/fonts";
const app = getApp();

const PhoneAuth = ({ navigation }) => {
  const recapthchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();

  const [code, setCode] = React.useState();

  const [message, showMessage] = React.useState();

  const attemtInvisibleVerification = false;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recapthchaVerifier}
        firebaseConfig={firebaseApp.options}
      />
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
            Enter your
          </Text>
          <Text
            style={{
              fontSize: 23,

              fontFamily: fonts.bold,
            }}>
            mobile number
          </Text>
          <Text
            style={{
              color: "#9e9e9eff",
              fontFamily: fonts.bold,
              marginVertical: 15,
            }}>
            We will send you confirmation code
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 30,
              color: "#9e9e9eff",
              marginRight: 10,
            }}>
            +91
          </Text>
          <TextInput
            style={{ borderColor: "red", fontSize: 30 }}
            autoFocus
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={(phoneNumber) => {
              const number = "+91" + phoneNumber;
              console.log(number);
              setPhoneNumber(number);
            }}
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
              const phoneProvider = new PhoneAuthProvider(auth);
              const verficationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recapthchaVerifier.current,
              );
              setVerificationId(verficationId);

              navigation.navigate("Verification", {
                verificationId: verficationId,
              });
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: "red" });
            }
          }}>
          <Text
            style={{ color: "white", fontFamily: fonts.bold, fontSize: 17 }}>
            Next
          </Text>
        </Pressable>

        {message ? (
          <TouchableOpacity
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 0xffffffee, justifyContent: "center" },
            ]}
            onPress={() => showMessage(undefined)}>
            <Text
              style={{
                color: message.color || "blue",
                fontSize: 17,
                textAlign: "center",
                margin: 20,
              }}>
              {message.text}
            </Text>
          </TouchableOpacity>
        ) : undefined}
        {attemtInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
    </View>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({});
