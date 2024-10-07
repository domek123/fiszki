import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./i18n";

import React from "react";
import { myTheme } from "./theme";
import { StackNavigation } from "./naviagtion";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}
