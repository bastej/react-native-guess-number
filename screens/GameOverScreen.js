import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default GameOverScreen;
