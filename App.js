import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import CreateAccount from "./components/CreateAccount";
import ProductScreen from "./components/ProductScreen";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import ContactInfo from "./components/ContactInfo";
import Bank from "./components/Bank";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Bank" component={Bank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
