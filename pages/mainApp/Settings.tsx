import { SafeAreaView, Text, View } from "react-native";
import { globalStyles } from "../../style";
export const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyles.center, globalStyles.SAV]}>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
