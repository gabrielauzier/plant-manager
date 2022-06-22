import React from "react";
import { Button } from "../../components/Button";

import { Container, Emoji, Text, Title } from "./styles";

export function Confirmation() {
  return (
    <Container>
      <Emoji>😁</Emoji>
      <Title>Prontinho</Title>
      <Text>
        Agora vamos começar a cuidar das suas{"\n"}plantinhas com muito cuidado.
      </Text>
      <Button title="Começar" onPress={() => {}} />
    </Container>
  );
}
