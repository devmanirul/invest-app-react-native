import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        {/* <Stack.Screen name="CreateAccount" component={CreateAccount} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
