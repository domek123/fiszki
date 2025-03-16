import { useCreateCourse } from "@/hooks";
import { t } from "i18next";
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
export const Description = () => {
  const { courseName, setCourseName, courseDescription, setCourseDescription } =
    useCreateCourse();
  return (
    <>
      <View style={styles.headerView}>
        <Text style={{ width: "30%" }}>{t("addCourse.courseName")}</Text>
        <TextInput
          style={styles.input}
          placeholder={t("addCourse.courseName")}
          onChangeText={(value) => setCourseName(value)}
          value={courseName}
        />
      </View>
      <View style={styles.headerView}>
        <Text style={{ width: "30%" }}>{t("addCourse.courseDescription")}</Text>
        <TextInput
          style={styles.input}
          placeholder={t("addCourse.courseDescription")}
          onChangeText={(value) => setCourseDescription(value)}
          value={courseDescription}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  input: {
    width: "70%",
  },
});
