/**
 * Core app component
 *
 * Lifting up selected number then set it in state with hooks
 * and change screen if number return "true"
 */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataReady, setDataReady] = useState(false);

  if (!dataReady) {
    // function passed to startAsync should return Promise
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  const handleResetGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds === 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        onResetGame={handleResetGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
