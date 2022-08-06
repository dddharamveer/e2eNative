import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./TabsNavigation";

import TasksDetails from "../screens/Main/TasksDetails";
import CreateTask from "../screens/Main/CreateTask";

const stack = createNativeStackNavigator();
export default function Main() {
  return (
    <stack.Navigator
      screenOptions={{ animation: "slide_from_right", headerShown: false }}>
      <stack.Screen name="TabsNavigation" component={Bottom} />
      <stack.Screen name="TaskDetails" component={TasksDetails} />
      <stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ animation: "slide_from_bottom" }}
      />
    </stack.Navigator>
  );
}
