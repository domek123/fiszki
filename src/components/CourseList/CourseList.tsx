import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ListItem } from "./ListItem";
import { useTranslation } from "react-i18next";
import { MenuProvider } from "react-native-popup-menu";
import { Course } from "../../../db";

export const CourseList = ({ courses }: { courses: Course[] }) => {
  const { t } = useTranslation();

  return (
    <View style={{ width: "100%", gap: 10 }}>
      <Text style={styles.header}>
        {t("homePage.yourCourses")} ({courses.length})
      </Text>
      <ScrollView
        style={{ maxHeight: 215 }}
        showsVerticalScrollIndicator={false}
      >
        <MenuProvider>
          <View style={{ gap: 10 }}>
            {courses.map((item) => (
              <ListItem item={item} key={item.id} />
            ))}
          </View>
        </MenuProvider>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "600",
  },
});
