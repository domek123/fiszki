import { SafeAreaView } from "react-native";
import { Divider } from "@/components";
import { Description } from "./Description";
import GlobalStyles from "@/styles/GlobalStyles";

export const AddCourseView = () => {
  return (
    <SafeAreaView style={[GlobalStyles.SAV, { gap: 10 }]}>
      <Description />
      <Divider />
    </SafeAreaView>
  );
};
