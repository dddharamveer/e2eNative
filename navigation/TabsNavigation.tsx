import { Image, Pressable, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/Colors";
import BrowseTasks from "../components/BrowseTasks";

import Account from "../screens/Main/Account";

import { fonts } from "../constants/fonts";

import HomePage from "../screens/Main/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome5,
  Octicons,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";
import MyTasks from "../screens/Main/MyTasks";
import React, { Children, useEffect } from "react";
import CreateTask from "../screens/Main/CreateTask";
import UploadProfile from "../screens/Main/uploadProfile";
import { getUser } from "../constants/firebase/dataQueries";
import { Header } from "../components/Header";
import { CategoriesScreen } from "../screens/Main/Categories";
import Notifications from "../screens/Main/Notifications";

const Tab = createBottomTabNavigator();

export default function TabsNavigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { fontFamily: fonts.bold, paddingBottom: 2 },
        tabBarStyle: {},
      }}>
      <Tab.Screen
        name="Create a Task"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="appstore1" color={color} size={size} />;
          },
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Browse Tasks"
        component={BrowseTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="search" size={size} color={color} />;
          },
          headerRight: () => (
            <EvilIcons
              name="search"
              color={Colors.secondary}
              style={{ marginRight: 20 }}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="My Tasks"
        component={MyTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="archive" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="comment" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
