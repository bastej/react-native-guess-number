import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const PrimaryButton = ({ onPress, title, color, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          ...styles.button,
          ...style,
          ...(color ? { backgroundColor: color } : {}),
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 11,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 6,
  },
  text: {
    color: "#fff",
    fontFamily: "open-sans",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PrimaryButton;
