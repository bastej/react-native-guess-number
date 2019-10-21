import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const SelectedNumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 18,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: Colors.primary,
    borderLeftWidth: 6,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightWidth: 6,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  number: {
    color: Colors.accent,
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default SelectedNumberContainer;
