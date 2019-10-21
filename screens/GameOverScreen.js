import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ numberOfRounds }) => {
  return (
    <View style={styles.screen}>
      <Text>Game over! Rounds: {numberOfRounds}</Text>
      <Button title="Play again" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
