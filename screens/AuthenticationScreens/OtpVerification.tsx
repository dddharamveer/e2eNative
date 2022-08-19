import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

import ImageContainer from "../../components/Container-Rounded-Image";
import { AuthStackScreenProps } from "../../types";
import { auth } from "../../Firebase/firebaseConfig";
import Colors from "../../constants/Colors";
const OtpVerification = ({
  route,
}: AuthStackScreenProps<"OtpVerifictaion">) => {
  //TODO: check if user has come from phone verification screen
  const verificationId = route.params?.verificationId;

  const [verificationCode, setVerificationCode] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        size="large"
        color={Colors.light.background}
      />
    );
  }
  return (
    <ImageContainer>
      <View style={{}}>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          Enter code sent
        </Text>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          to your phone
        </Text>
        <Text
          style={{
            color: "#9e9e9eff",

            marginVertical: 15,
          }}
        >
          We sent it to the number
          <Text style={{ color: "black" }}>+91 9999889804</Text>
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
          onChangeText={(text: any) => setVerificationCode(text)}
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
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Submit</Text>
      </Pressable>
    </ImageContainer>
  );
};

export default OtpVerification;
