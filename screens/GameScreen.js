import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import SelectedNumberContainer from "../components/SelectedNumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  
  // we use refState to stay some variable unchangeable when Comp. re-render  
  // next advantage is that when we change that variable Comp. won't be re-render
  const currentRangeStart = useRef(1);
  const currentRangeEnd = useRef(100);

  const handleNextGuess = direction => {
    // if has been suggested wrong hint show alert  
    if((direction === "lower" && currentGuess < userChoice) || (direction === "greater" && currentGuess > userChoice)) {
          Alert.alert('It was wrong hint!', "Don't try to cheat", [{
              text: 'I was just joking', style="destructive"
          }])
          return;
      }
    // otherwise inform that guess number was wrong and draw next number
    if (direction === "lower") {
        currentRangeEnd.current = currentGuess;
    } else {
        currentRangeStart.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(currentRangeStart.current, currentRangeEnd.current, currentGuess);
    setCurrentGuess(nextNumber);
};

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <SelectedNumberContainer>{currentGuess}</SelectedNumberContainer>
      <Card style={styles.buttonsContainer}>
        <Button title="LOWER" onPress={() => handleNextGuess("lower")} />
        <Button title="GREATER" onPress={() => handleNextGuess("greater")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
