import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomHeader } from "@/components";
import { useTranslation } from "react-i18next";
import { Home, Settings } from "@/screens";

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
            <CustomHeader {...props} title={t("homePage.yourCourses")} />
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
