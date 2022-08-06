import { Pressable, Text, View } from "react-native";
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
  Feather,
} from "@expo/vector-icons";
import MyTasks from "../screens/Main/MyTasks";
import { Children } from "react";

function CategoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Categories!</Text>
      <FontAwesome5 name="plus" size={30} color={Colors.Primary} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabsNavigation({ navigation }) {
  function Icons({ children, onPress }) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
          elevation: 2,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 35,
            backgroundColor: Colors.secondary,
          }}>
          {children}
        </View>
      </Pressable>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarActiveTintColor: Colors.secondary,
        tabBarStyle: {
          position: "absolute",

          height: "8%",
          borderRadius: 30,
          margin: 10,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="md-home-outline" size={size} color={color} />
            );
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
                <Feather name="bell" size={30} color={Colors.secondary} />
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
            return (
              <SimpleLineIcons name="notebook" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Browse Tasks"
        component={BrowseTasks}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="plus" size={size} color="white" />;
          },
          tabBarButton: (props) => {
            return (
              <Icons
                {...props}
                onPress={() => navigation.navigate("CreateTask")}
              />
            );
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
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="account-circle" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
