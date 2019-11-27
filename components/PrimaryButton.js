import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/colors";

const PrimaryButton = ({ onPress, title, color, style }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={onPress}>
        <View
          style={{
            ...styles.button,
            ...style,
            ...(color ? { backgroundColor: color } : {}),
          }}
        >
          <Text style={styles.text}>{title}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  // fix for better UX with ripple effect on Android
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
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
