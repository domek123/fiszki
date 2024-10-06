import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./i18n";

import React from "react";
import { Login } from "./pages";
import { myTheme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
