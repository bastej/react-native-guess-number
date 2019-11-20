import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

import SelectedNumberContainer from "../components/SelectedNumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  // we use refState to stay some variable unchangeable when Comp. re-render
  // next advantage is that when we change that variable Comp. won't be re-render
  const currentRangeStart = useRef(1);
  const currentRangeEnd = useRef(100);

  useEffect(() => {
    if (userChoice === currentGuess) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const handleNextGuess = direction => {
    // if has been suggested wrong hint show alert
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("It was wrong hint!", "Don't try to cheat", [
        {
          text: "I was just joking",
          style: "destructive",
        },
      ]);
      return;
    }
    // otherwise inform that guess number was wrong and draw next number
    if (direction === "lower") {
      currentRangeEnd.current = currentGuess;
    } else {
      currentRangeStart.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentRangeStart.current,
      currentRangeEnd.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currRounds => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TitleText textWeight="bold">Opponent's Guess</TitleText>
      <SelectedNumberContainer>{currentGuess}</SelectedNumberContainer>
      <Card style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton
            color={Colors.accent}
            title={<AntdIcon name="downcircleo" size={24} />}
            onPress={() => handleNextGuess("lower")}
          />
        </View>
        <View style={styles.button}>
          <PrimaryButton
            color={Colors.primary}
            title={<AntdIcon name="upcircleo" size={24} />}
            onPress={() => handleNextGuess("greater")}
          />
        </View>
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
    width: 320,
    maxWidth: "95%",
  },
});

export default GameScreen;
