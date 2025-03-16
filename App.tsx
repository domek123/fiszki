import { NavigationContainer } from "@react-navigation/native";
import "./src/i18n";

import React from "react";
import { myTheme } from "./theme";
import { StackNavigation } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}
