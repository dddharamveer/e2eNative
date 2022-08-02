import HomePage from "../screens/HomePage";
import Login from "../screens/Login";
import { BackButton, Title } from "../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
const stack = createNativeStackNavigator();

function Auth() {
  return (
    <stack.Navigator
      screenOptions={{
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
    </stack.Navigator>
  );
}

export default Auth;
