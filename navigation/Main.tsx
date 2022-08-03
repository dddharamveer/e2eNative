import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
import HomePage from "../screens/HomePage";
import Login from "../screens/Login";
import { BackButton, Title } from "../components/Header";
import SignUp from "../screens/SignUp";

import Haram from "./BottomNavigation";
const stack = createNativeStackNavigator();
function Main() {
    const { user } = useContext(AuthContext);

    return user ? (
        <stack.Navigator>
            <stack.Screen name="Auth" component={Haram} />
        </stack.Navigator>
    ) : (
        <stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#ffffff" },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => <BackButton />,
                headerBackButtonMenuEnabled: false,
            }}>
            <stack.Screen
                name="homePage"
                component={HomePage}
                options={{
                    headerShown: false,
                }}
            />
            <stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: "" }}
            />
            <stack.Screen
                name="LogIn"
                component={Login}
                options={{ title: "" }}
            />
        </stack.Navigator>
    );
}

export default Main;
