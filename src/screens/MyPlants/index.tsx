import { StatusBar } from "expo-status-bar";
import React from "react";
import WaterdropSvg from "../../assets/waterdrop.svg";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  Subtitle,
  Text,
  TipText,
  Title,
  UserProfile,
  WateringTip,
} from "./styles";

export function MyPlants() {
  return (
    <Container>
      <StatusBar />
      <Header>
        <HeaderTitle>
          <Text>Minhas</Text>
          <Title>Plantinhas</Title>
        </HeaderTitle>
        <UserProfile
          source={{
            uri: "https://avatars.githubusercontent.com/u/63938494?v=4",
          }}
        />
      </Header>
      <Content>
        <WateringTip>
          <WaterdropSvg width={56} />
          <TipText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            itaque.
          </TipText>
        </WateringTip>

        <Subtitle>Próximas regadas</Subtitle>
        <PlantCardSecondary />
      </Content>
    </Container>
  );
}
