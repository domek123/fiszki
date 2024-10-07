import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Settings } from "../pages";
import { CustomHeader } from "../components";
import { useTranslation } from "react-i18next";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: (props) => (
            <CustomHeader {...props} title={t("homePage.title")} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          header: (props) => (
            <CustomHeader {...props} title={t("settingsPage.title")} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
