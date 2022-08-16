import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "./TabsNavigation";

import TasksDetails from "../screens/Main/TasksDetails";
import CreateTask from "../screens/Main/CreateTask";

import UserInput from "../screens/Main/UserInput";
import uploadProfile from "../screens/Main/uploadProfile";
import UploadProfile from "../screens/Main/uploadProfile";
import FilterScreen from "../screens/Main/FilterScreen";
import { Colors } from "../constants/Colors";
import { fonts } from "../constants/fonts";

const stack = createNativeStackNavigator();

export default function Main() {
  const Content = () => {
    return (
      <stack.Navigator
        screenOptions={{ animation: "slide_from_right", headerShown: false }}>
        <stack.Screen name="TabsNavigation" component={Bottom} />
        <stack.Screen name="UserInput" component={UserInput} />

        <stack.Screen
          name="TaskDetails"
          component={TasksDetails}
          options={{ headerShown: true }}
        />
        <stack.Screen
          name="CreateTask"
          component={CreateTask}
          options={{ animation: "slide_from_bottom" }}
        />
        <stack.Screen name="Profile" component={UploadProfile} />
        <stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{
            animation: "slide_from_bottom",
            headerShown: true,
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: Colors.secondary,
              fontFamily: fonts.extrabold,
            },
          }}
        />
      </stack.Navigator>
    );
  };

  return <Content />;
}
