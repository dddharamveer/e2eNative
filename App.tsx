import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";
import IconButton from "./components/ui/IconButton";
import { BackButton } from "./components/Header";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#ffffff' },
              headerShadowVisible: false,
              headerBackVisible: false,
              headerLeft: () => (<BackButton />),

              headerBackButtonMenuEnabled: false


            }}
          >
            <stack.Screen name="homePage" component={HomePage} options={{
              headerShown: false
            }} />
            <stack.Screen name="SignUp" component={SignUp}
              options={{ title: '' }}
            />
            <stack.Screen name="LogIn" component={Login}
              options={{ title: '' }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
