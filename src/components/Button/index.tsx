import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled && !loading ? 1 : 0.5 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
