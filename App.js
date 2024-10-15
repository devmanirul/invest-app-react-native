import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import CreateAccount from "./components/CreateAccount";
import ProductScreen from "./components/ProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
