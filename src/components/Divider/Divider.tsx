import { View } from "react-native";
import { DividerProps } from "./Divider.types";

export const Divider = ({
  width = "100%",
  height = 1,
  color = "black",
}: DividerProps) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    />
  );
};
