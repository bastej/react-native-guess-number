import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";

const GameOverScreen = ({ numberOfRounds, userNumber, onResetGame }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Game over!</Text>
        <Text>Rounds: {numberOfRounds}</Text>
        <Text>Number was {userNumber}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Play again" onPress={onResetGame} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    padding: 30,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default GameOverScreen;
