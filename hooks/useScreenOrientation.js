import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const PORTRAIT = "portrait";
export const LANDSCAPE = "landscape";

const getScreenOrientation = () => {
  return Dimensions.get("window").width < Dimensions.get("window").height
    ? PORTRAIT
    : LANDSCAPE;
};

export const useScreenOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState(
    getScreenOrientation()
  );

  useEffect(() => {
    Dimensions.addEventListener("change", setScreenMode);
    // remove old listener to keep just only one
    return () => {
      Dimensions.removeEventListener("change", setScreenMode);
    };
  });

  const setScreenMode = () => {
    setScreenOrientation(getScreenOrientation());
  };
  return [screenOrientation];
};
