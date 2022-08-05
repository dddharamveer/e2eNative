import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/Colors";
import BrowseTasks from "../components/BrowseTasks";

import Account from "../screens/Main/Account";

import { fonts } from "../constants/fonts";

import HomePage from "../screens/Main/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5, Octicons } from "@expo/vector-icons";
import MyTasks from "../screens/Main/MyTasks";
import Tasks from "./TasksNavigation";

function CategoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Categories!</Text>
      <FontAwesome5 name="plus" size={30} color={Colors.Primary} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "8%",
          backgroundColor: Colors.secondary,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Tasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="home" size={size} color={color} />;
          },
          header: () => {
            return (
              <SafeAreaView
                style={{
                  margin: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: 25,
                  }}>
                  Hi, Bharat Adya
                </Text>
                <Octicons name="bell-fill" size={30} color={Colors.secondary} />
              </SafeAreaView>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={MyTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="comments" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Browse Tasks"
        component={BrowseTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="search" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <IconButton
                name="calendar"
                iconColor={color}
                size={22}
                color="transparent"
                onPress={() => {
                  navigation.navigate("Categories");
                }}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <IconButton
                name="user-circle"
                iconColor={color}
                size={22}
                color="transparent"
                onPress={() => {
                  navigation.navigate("Account");
                }}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}
