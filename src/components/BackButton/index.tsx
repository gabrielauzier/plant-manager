import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest} onPress={handleGoBack}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ?? theme.colors.body_dark}
      />
    </Container>
  );
}
