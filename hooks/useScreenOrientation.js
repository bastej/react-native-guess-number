import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useScreenOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState(
    Dimensions.get("window").width < Dimensions.get("window").height
      ? "portrait"
      : "landscape"
  );

  useEffect(() => {
    Dimensions.addEventListener("change", setScreenMode);
    // remove old listener to keep just only one
    return () => {
      Dimensions.removeEventListener("change", setScreenMode);
    };
  });

  const setScreenMode = () => {
    setScreenOrientation(
      Dimensions.get("window").width < Dimensions.get("window").height
        ? "portrait"
        : "landscape"
    );
  };
  return [screenOrientation];
};
