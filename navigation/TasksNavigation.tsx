import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/Main/HomePage";
import TasksContent from "../screens/Main/TasksContent";

const Stack = createNativeStackNavigator();
const Tasks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="TaskContent" component={TasksContent} />
    </Stack.Navigator>
  );
};

export default Tasks;
