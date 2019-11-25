import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
// Hint: <View/> using flex-box

import PlainText from "../components/PlainText";
import TitleText from "../components/TitleText";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/colors";

const GameOverScreen = ({ numberOfRounds, userNumber, onResetGame }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText textWeight="bold">Sorry...</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // source={require("../assets/game-over.jpg")}
            // fadeDuration={1000} default 300ms
            source={{
              uri:
                "https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/587x587/9df78eab33525d08d6e5fb8d27136e95/l/a/lampa_game_over_2.jpg",
            }}
            style={styles.image}
          />
        </View>
        {/* 
          <Text/> not using flex-box
          we can style just parent Text and all child Texts will inherit him styles
      */}
        <View style={styles.resultsContainer}>
          <PlainText style={styles.resultsText}>
            Your phone needed{" "}
            <PlainText style={styles.highlight} textWeight="bold">
              {numberOfRounds}
            </PlainText>{" "}
            rounds to guess number{" "}
            <PlainText style={styles.highlight} textWeight="bold">
              {userNumber}
            </PlainText>
          </PlainText>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Play again" onPress={onResetGame} />
        </View>
      </View>
    </ScrollView>
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
  resultsContainer: {
    marginHorizontal: 30,
    alignContent: "center",
  },
  resultsText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
