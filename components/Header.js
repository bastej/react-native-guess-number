import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { AntDesign as AntdIcon } from "@expo/vector-icons";
import { useScreenOrientation, LANDSCAPE } from "../hooks/useScreenOrientation";

import TitleText from "./TitleText";

import Colors from "../constants/colors";

const Header = ({ title }) => {
  const [screenOrientation] = useScreenOrientation();

  const isLandscape = screenOrientation === LANDSCAPE;

  const [headerHeight, setHeaderHeight] = useState(isLandscape ? 80 : 90);

  useEffect(() => updateLayout(), [screenOrientation]);

  const updateLayout = () => {
    setHeaderHeight(isLandscape ? 80 : 90);
  };

  return (
    <View
      style={{
        ...styles.headerBase,
        height: headerHeight,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle} textWeight="bold">
        {title}
      </TitleText>
      {isLandscape && (
        <TouchableOpacity
          onPress={() =>
            alert("Switch to portrait mode for better user experience")
          }
        >
          <AntdIcon
            name="infocirlceo"
            color={Platform.select({ ios: Colors.primary, android: "#fff" })}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    paddingTop: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "#fff",
    marginHorizontal: 6,
  },
});

export default Header;
