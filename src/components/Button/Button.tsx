import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ButtonProps } from "./Button.types";
import { useTheme } from "@react-navigation/native";

export const Button = ({ text, bgColor, action }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={action}
    >
      <Text style={{ color: colors.text, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    textAlign: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
});
