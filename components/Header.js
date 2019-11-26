import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign as AntdIcon } from "@expo/vector-icons";
import { useScreenOrientation } from "../hooks/useScreenOrientation";

import TitleText from "./TitleText";

import Colors from "../constants/colors";

const Header = ({ title }) => {
  const [screenOrientation] = useScreenOrientation();

  const isLandscape = screenOrientation === "landscape";

  const [headerHeight, setHeaderHeight] = useState(isLandscape ? 80 : 90);

  useEffect(() => updateLayout(), [screenOrientation]);

  const updateLayout = () => {
    setHeaderHeight(isLandscape ? 80 : 90);
  };

  return (
    <View style={{ ...styles.header, height: headerHeight }}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
      {isLandscape && (
        <TouchableOpacity
          onPress={() =>
            alert("Switch to portrait mode for better user experience")
          }
        >
          <AntdIcon name="infocirlceo" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    marginHorizontal: 6,
  },
});

export default Header;
