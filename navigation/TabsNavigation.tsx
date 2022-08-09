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
  Feather,
} from "@expo/vector-icons";
import MyTasks from "../screens/Main/MyTasks";
import { Children } from "react";
import CreateTask from "../screens/Main/CreateTask";

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
          borderRadius: 5,
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
                  backgroundColor: "white",
                  padding: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text
                  style={{
                    fontFamily: fonts.main,
                    fontSize: 15,
                  }}>
                  Hi, Bharat{"\n"}
                  <Text style={{ fontFamily: fonts.extrabold, fontSize: 20 }}>
                    Good Morning !
                  </Text>
                </Text>
                <View>
                  <Image
                    style={{
                      borderWidth: 1,
                      borderColor: Colors.secondary,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                    }}
                    source={{
                      uri: "https://images.unsplash.com/photo-1659492061718-f3708aae95d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
                    }}
                  />
                </View>
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
        component={CreateTask}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="plus" size={size} color="black" />;
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
