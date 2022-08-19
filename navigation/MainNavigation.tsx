import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "../screens/Main/CreateTaskScreen";

import FilterScreen from "../screens/Main/FilterScreen";
import TasksDetails from "../screens/Main/TasksDetails";
import UserProfile from "../screens/Main/UserProfile";
import { MainStackParamList } from "../types";
import MainBottomTabs from "./MainBottomTabs";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ animation: "slide_from_right", headerShown: false }}
    >
      <Stack.Screen name="Root" component={MainBottomTabs} />
      {/* <Stack.Screen name="UserInput" component={UserInput} /> */}

      <Stack.Screen
        name="TaskDetails"
        component={TasksDetails}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{
          animation: "slide_from_bottom",
          headerShown: true,
          title: "Title & Date",
        }}
      />
      <Stack.Screen name="Profile" component={UserProfile} />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          animation: "slide_from_bottom",
          headerShown: true,
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
