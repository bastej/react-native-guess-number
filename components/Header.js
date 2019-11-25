import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import TitleText from "./TitleText";

import Colors from "../constants/colors";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

const Header = ({ title }) => {
  const [isLandscapeMode, setIsLandscapeMode] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height
  );
  const [headerHeight, setHeaderHeight] = useState(isLandscapeMode ? 80 : 90);

  useEffect(() => updateLayout(), [isLandscapeMode]);

  const setScreenMode = () => {
    setIsLandscapeMode(
      Dimensions.get("window").width > Dimensions.get("window").height
    );
  };

  const updateLayout = () => {
    setHeaderHeight(isLandscapeMode ? 80 : 90);
  };

  Dimensions.addEventListener("change", setScreenMode);

  return (
    <View style={{ ...styles.header, height: headerHeight }}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
      {isLandscapeMode && (
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
