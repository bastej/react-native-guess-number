import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import PlainText from "../components/PlainText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = ({ numberOfRounds, userNumber, onResetGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText textWeight="bold">Sorry...</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/game-over.jpg")}
          style={styles.image}
        />
      </View>
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
  imageContainer: {
    width: 240,
    height: 240,
    marginVertical: 10,
    borderColor: Colors.primary,
    borderRadius: 6,
    borderWidth: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
