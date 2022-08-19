import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, EvilIcons } from "@expo/vector-icons";
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

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainBottomTabs({
  navigation,
}: MainStackScreenProps<"Root">) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { paddingBottom: 2 },
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={({
          navigation,
          route,
        }: MainTabScreenProps<"CategoriesScreen">) => ({
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="appstore1" color={color} size={size} />;
          },
          header: () => <Header navigation={navigation} route={route} />,
        })}
      />
      <Tab.Screen
        name="BrowseTasks"
        component={BrowseTasksScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="search" size={size} color={color} />;
          },
          headerRight: () => (
            <EvilIcons name="search" style={{ marginRight: 20 }} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="MyTasks"
        component={MyTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="archive" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="comment" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
