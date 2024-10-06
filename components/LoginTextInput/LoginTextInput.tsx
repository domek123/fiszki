import { TextInput, StyleSheet } from "react-native";
import { LoginTextFieldProps } from "./types";
import { useTheme } from "@react-navigation/native";

export const LoginTextInput = (props: LoginTextFieldProps) => {
  const { colors } = useTheme();

  return (
    <TextInput
      style={[
        styles.textInput,
        { color: colors.text, borderColor: colors.border },
      ]}
      value={props.value}
      onChangeText={props.onChange}
      placeholder={props.placeholderText}
      placeholderTextColor={colors.text}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
});
