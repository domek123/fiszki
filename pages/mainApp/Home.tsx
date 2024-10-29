import { Text, View } from "react-native";
import { globalStyles } from "../../style";
import { CourseList } from "../../components";
export const Home = ({ navigation }) => {
  return (
    <View style={[, globalStyles.center, globalStyles.SAV]}>
      <View>
        <CourseList />
      </View>
    </View>
  );
};
