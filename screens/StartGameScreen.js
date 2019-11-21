import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import SelectedNumberContainer from "../components/SelectedNumberContainer";
import PlainText from "../components/PlainText";
import TitleText from "../components/TitleText";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/colors";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberInput = inputText => {
    const validatedValue = inputText.replace(/[^0-9]/g, "");

    setEnteredValue(validatedValue);
  };

  const handleResetInput = () => {
    setEnteredValue("");
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        {
          text: "Okey",
          style: "destructive",
          onPress: handleResetInput,
        },
      ]);
      return;
    }

    setConfirmed(true);
    // order of calling method belows doesn't matter, but logically will be to
    // firstly save number and then reset it
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <PlainText>You selected</PlainText>
        <SelectedNumberContainer>{selectedNumber}</SelectedNumberContainer>
        <PrimaryButton
          title="LET'S PLAY"
          onPress={() => onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText textWeight="bold" style={styles.title}>
          Let's try to challenge me!
        </TitleText>
        <Card style={styles.inputContainer}>
          <PlainText textWeight="bold">Select a number</PlainText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleNumberInput}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={handleConfirmInput}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Reset"
                onPress={handleResetInput}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "97%",
    alignItems: "center",
  },
  input: {
    width: "60%",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
