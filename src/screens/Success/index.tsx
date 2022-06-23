import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "../../components/Button";

import { Container, Emoji, Text, Title } from "./styles";

export function Success() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Emoji>🤗</Emoji>
      <Title>Tudo certo</Title>
      <Text>
        Fique tranquilo que sempre vamos{"\n"}lembrar você de cuidar da sua
        plantinha{"\n"}com bastante amor.
      </Text>
      <Button
        title="Muito obrigado :D"
        onPress={() => {
          navigate("PlantSelect");
        }}
      />
    </Container>
  );
}
