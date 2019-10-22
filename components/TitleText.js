/**
 * Reusable Comp. that make easy to change font family for many Text Comp. in app
 *
 * textWeight determinate if font will be bold or regular (by default is regular)
 */

import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = ({ children, style, textWeight = "regular" }) => (
  <Text style={{ ...styles.title, ...styles[textWeight], ...style }}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  regular: {
    fontFamily: "open-sans",
  },
  bold: {
    fontFamily: "open-sans-bold",
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.6,
  },
});

export default TitleText;
