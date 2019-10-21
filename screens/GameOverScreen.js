import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";

const GameOverScreen = ({ numberOfRounds, userNumber, onResetGame }) => {
  return (
    <Card style={styles.screen}>
      <Text>Game over!</Text>
      <Text>Rounds: {numberOfRounds}</Text>
      <Text>Number was {userNumber}</Text>
      <Button title="Play again" onPress={onResetGame} />
    </Card>
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
