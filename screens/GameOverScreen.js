import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import PlainText from "../components/PlainText";
import TitleText from "../components/TitleText";

const GameOverScreen = ({ numberOfRounds, userNumber, onResetGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText textWeight="bold">Game over!</TitleText>
      <Image source={require("../assets/game-over.jpg")} />
      <PlainText>Rounds: {numberOfRounds}</PlainText>
      <PlainText>Number was {userNumber}</PlainText>
      <View style={styles.buttonContainer}>
        <Button title="Play again" onPress={onResetGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default GameOverScreen;
