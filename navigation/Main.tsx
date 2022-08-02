import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneNumberAuth from "../screens/PhoneNumberAuth";
const stack = createNativeStackNavigator();
function Main() {
  return (
    <stack.Navigator>
      <stack.Screen name="Auth" component={PhoneNumberAuth} />
    </stack.Navigator>
  );
}

export default Main;
