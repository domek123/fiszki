import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItemProps } from "./CourseList.types";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { useEffect, useState } from "react";

export const ListItem = ({ item }: ListItemProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <TouchableOpacity style={{ width: "90%" }}>
        <Text style={{ color: colors.text }}>
          <Text style={{ fontWeight: "600" }}>{item.name}</Text> -{" "}
          {item.description}
        </Text>
      </TouchableOpacity>
      <Menu>
        <MenuTrigger>
          <Icon name="more-vertical" size={25} color={colors.text} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption text="AAA"></MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
});
