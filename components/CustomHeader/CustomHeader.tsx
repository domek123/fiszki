import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { CustomHeaderProps } from "./types";
export const CustomHeader = ({ navigation, title }: CustomHeaderProps) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={25} color={colors.text} />
      </TouchableOpacity>

      <Text style={{ fontSize: 20, color: colors.text }}>{title}</Text>

      <Icon name="settings" size={25} color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 35,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
