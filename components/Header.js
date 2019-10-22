import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PlainText from "./PlainText";
import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <PlainText style={styles.headerTitle}>{title}</PlainText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 0.6,
  },
});

export default Header;
