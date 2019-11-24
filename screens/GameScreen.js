import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

import SelectedNumberContainer from "../components/SelectedNumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import PlainText from "../components/PlainText";
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
  const initialGuess = generateRandomNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  // we use refState to stay some variable unchangeable when Comp. re-render
  // next advantage is that when we change that variable Comp. won't be re-render
  const currentRangeStart = useRef(1);
  const currentRangeEnd = useRef(100);

  useEffect(() => {
    if (userChoice === currentGuess) {
      onGameOver(pastGuesses.length);
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
      currentRangeStart.current = currentGuess + 1;
    }
    const nextNumber = generateRandomNumber(
      currentRangeStart.current,
      currentRangeEnd.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds(currRounds => currRounds + 1);
    setPastGuesses(currPastGuesses => [nextNumber, ...currPastGuesses]);
  };

  const renderListItem = (value, numOfRounds) => (
    <View key={value} style={styles.listItem}>
      <PlainText>Round No. #{numOfRounds}</PlainText>
      <PlainText textWeight="bold" style={styles.listItemTitle}>
        {value}
      </PlainText>
    </View>
  );

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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
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
  listItem: {
    padding: 7,
    borderBottomWidth: 3,
    borderColor: Colors.primary,
    marginVertical: 5,
    width: "60%",
  },
  listItemTitle: { fontSize: 20, textAlign: "center" },
  listContainer: { width: "80%", flex: 1 },
  list: { alignItems: "center", justifyContent: "flex-end", flexGrow: 1 },
});

export default GameScreen;
