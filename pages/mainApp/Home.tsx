import { SafeAreaView, Text, View } from "react-native";
import { globalStyles } from "../../style";
export const Home = ({ navigation }) => {
  return (
    <View style={[globalStyles.center, globalStyles.SAV]}>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
};
