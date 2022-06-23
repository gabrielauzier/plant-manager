import React from "react";

import LottieView from "lottie-react-native";
import loadAnimation from "../../assets/load.json";
import { View } from "react-native";
import { useTheme } from "styled-components";

export function Loading() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
