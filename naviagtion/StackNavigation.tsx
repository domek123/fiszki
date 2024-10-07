import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages";
import { DrawerNavigation } from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main app" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
