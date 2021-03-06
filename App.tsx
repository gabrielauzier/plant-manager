import React from "react";
import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

import { LogBox } from "react-native";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

  if (!fontsLoaded) return null;
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar style="dark" backgroundColor="transparent" />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
