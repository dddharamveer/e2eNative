import HomePage from "../screens/Auth/HomePage";
import Login from "../screens/Auth/Login";
import { BackButton, Title } from "../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/Auth/SignUp";
import PhoneAuth from "../screens/Auth/PhoneAuth";
import OtpVerification from "../screens/Auth/OtpVerification";
const stack = createNativeStackNavigator();

function Auth() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#ffffff" },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => <BackButton />,
        headerBackButtonMenuEnabled: false,
      }}>
      <stack.Screen
        name="homePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen name="SignUp" component={SignUp} options={{ title: "" }} />
      <stack.Screen name="LogIn" component={Login} options={{ title: "" }} />
      <stack.Screen
        name="PhoneAuth"
        component={PhoneAuth}
        options={{ title: "" }}
      />
      <stack.Screen name="Verification" component={OtpVerification} />
    </stack.Navigator>
  );
}

export default Auth;
