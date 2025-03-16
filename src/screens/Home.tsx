import { View, StyleSheet } from "react-native";
import GlobalStyles from "@/styles/GlobalStyles";
import { CourseList, Button, Divider } from "@/components";
import { useTheme } from "@react-navigation/native";
import data from "../../db/coursesInfo.json";
import { useState } from "react";
export const Home = ({ navigation }) => {
  const { colors } = useTheme();

  const [courses, setCourses] = useState(data);

  return (
    <View style={[GlobalStyles.center, GlobalStyles.SAV]}>
      <View style={styles.container}>
        <CourseList courses={courses} />
        <Divider />
        <Button
          text="Dodaj kurs"
          bgColor={colors.notification}
          action={() => {
            navigation.navigate("AddCourse");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: "100%",
  },
});
