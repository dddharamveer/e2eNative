//Screen Imports

// import PhoneAuth from "../screens/Auth/PhoneAuth";
// import OtpVerification from "../screens/Auth/OtpVerification";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../types";
import LandingPageAuth from "../screens/AuthenticationScreens/LandingPageAuth";
import LoginWithEmailScreen from "../screens/AuthenticationScreens/LoginWithEmail";
import SignUpWithEmail from "../screens/AuthenticationScreens/SignUpWithEmail";
import PhoneAuthScreen from "../screens/AuthenticationScreens/PhoneAuthScreen";
import OtpVerification from "../screens/AuthenticationScreens/OtpVerification";

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#ffffff" },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerBackButtonMenuEnabled: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Root" component={LandingPageAuth} />
      <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} />
      <Stack.Screen name="LoginWithEmail" component={LoginWithEmailScreen} />
      <Stack.Screen
        name="PhoneAuthScreen"
        component={PhoneAuthScreen}
        options={{ title: "" }}
      />
      <Stack.Screen name="OtpVerifictaion" component={OtpVerification} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
