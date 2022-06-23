import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  isActive: boolean;
}

export function EnvironmentButton({
  title,
  isActive,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}
