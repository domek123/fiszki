import { StyleSheet, Text, View } from "react-native";
import data from "../../db/coursesInfo.json";
import { ListItem } from "./ListItem";
import { useTranslation } from "react-i18next";

export const CourseList = () => {
  const { t } = useTranslation();

  return (
    <View style={{ width: "100%", gap: 10 }}>
      <Text style={styles.header}>{t("homePage.yourCourses")}</Text>
      {data.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "600",
  },
});
