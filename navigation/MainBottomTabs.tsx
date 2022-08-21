import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MyTasks from "../screens/Main/MyTasks";
import React, { Children, useEffect } from "react";

// import { getUser } from "../constants/firebase/dataQueries";
import { Header } from "../components/Header";
import CategoriesButton, {
  CategoriesScreen,
} from "../screens/Main/CategoriesScreen";

import Notifications from "../screens/Main/Notifications";

import {
  MainStackScreenProps,
  MainTabParamList,
  MainTabScreenProps,
} from "../types";
import BrowseTasksScreen from "../screens/Main/BrowseTasksScreen";
import AccountScreen from "../screens/Main/AccountScreen";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator<MainTabParamList>();

function Icon({ name, color, size }: any) {
  return;
}

export default function MainBottomTabs({
  navigation,
}: MainStackScreenProps<"Root">) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { paddingBottom: 2 },
        tabBarActiveTintColor: Colors.light.background,
      }}
    >
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={({
          navigation,
          route,
        }: MainTabScreenProps<"CategoriesScreen">) => ({
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <MaterialCommunityIcons name="album" color={color} size={size} />
            ) : (
              <MaterialCommunityIcons name="adjust" color={color} size={size} />
            );
          },

          headerShown: false,
        })}
      />
      <Tab.Screen
        name="BrowseTasks"
        component={BrowseTasksScreen}
        options={{
          title: "Browse Tasks",
          headerTitleStyle: { fontFamily: "Inter-Regular", fontSize: 20 },
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <Ionicons name="search-circle" size={27} color={color} />
            ) : (
              <Ionicons name="search-circle-outline" size={27} color={color} />
            );
          },
          headerRight: () => (
            <Ionicons name="search" style={{ marginRight: 20 }} size={23} />
          ),
        }}
      />

      <Tab.Screen
        name="MyTasks"
        component={MyTasks}
        options={{
          title: "My Tasks",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <Ionicons name="md-book" size={size} color={color} />
            ) : (
              <Ionicons name="md-book-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <Ionicons name="notifications-circle" size={27} color={color} />
            ) : (
              <Ionicons
                name="notifications-circle-outline"
                size={27}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
