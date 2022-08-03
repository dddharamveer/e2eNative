import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneNumberAuth from "../screens/PhoneNumberAuth";
import Haram from "./BottomNavigation";
const stack = createNativeStackNavigator();
function Main() {
  return (
    <stack.Navigator>
      <stack.Screen name="Auth" component={Haram} />
    </stack.Navigator>
  );
}

export default Main;
