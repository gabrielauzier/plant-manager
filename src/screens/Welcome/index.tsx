import React from "react";

import { Feather } from "@expo/vector-icons";
import { Container, Title, Text, Illustration, Button } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export function Welcome() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      <Title>
        Gerencie{"\n"}suas plantas de{"\n"}forma fácil
      </Title>
      <Illustration />
      <Text>
        Não esqueça mais de regar suas{"\n"}plantas. Nós cuidamos de lembrar
        você{"\n"}sempre que precisar.
      </Text>

      <Button onPress={() => navigate("UserIdentification")}>
        <Feather name="chevron-right" color="white" size={24}></Feather>
      </Button>
    </Container>
  );
}
