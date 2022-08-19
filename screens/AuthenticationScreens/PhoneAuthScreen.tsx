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

import ImageContainer from "../../components/Container-Rounded-Image";
import { auth, db } from "../../Firebase/firebaseConfig";
import { AuthStackScreenProps } from "../../types";
import Colors from "../../constants/Colors";
const app = getApp();

const PhoneAuthScreen = ({
  navigation,
}: AuthStackScreenProps<"PhoneAuthScreen">) => {
  const recapthchaVerifier = React.useRef<any>();
  const [phoneNumber, setPhoneNumber] = React.useState<any>();
  const [verificationId, setVerificationId] = React.useState();

  const [code, setCode] = React.useState();

  const [message, showMessage] = React.useState<any>();

  const attemtInvisibleVerification = false;
  const top = (
    <FirebaseRecaptchaVerifierModal
      ref={recapthchaVerifier}
      firebaseConfig={app.options}
    />
  );

  return (
    <ImageContainer top={top}>
      <View>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          Enter your
        </Text>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          mobile number
        </Text>
        <Text
          style={{
            color: "#9e9e9eff",
            marginVertical: 15,
          }}
        >
          We will send you confirmation code
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Text
          style={{
            fontSize: 30,
            color: "#9e9e9eff",
            marginRight: 10,
          }}
        >
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
          backgroundColor: Colors.light.background,
          borderRadius: 10,
          marginVertical: 20,
        }}
        onPress={async () => {
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verficationId: any = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recapthchaVerifier.current,
            );
            setVerificationId(verficationId);

            navigation.navigate("OtpVerifictaion", {
              verificationId: verficationId,
            });
          } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Next</Text>
      </Pressable>

      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "0xffffffee", justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemtInvisibleVerification && <FirebaseRecaptchaBanner />}
    </ImageContainer>
  );
};

export default PhoneAuthScreen;
