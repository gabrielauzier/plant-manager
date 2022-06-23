import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SvgFromUri } from "react-native-svg";
import { PlantDTO } from "../../dtos/PlantDTO";

import WaterdropSvg from "../../assets/waterdrop.svg";
import {
  Container,
  Description,
  Header,
  ImageWrapper,
  Name,
  WateringTip,
  Content,
  TipText,
  ContentText,
  RegisterButton,
  ButtonText,
} from "./styles";
import { Text } from "react-native";
import { BackButton } from "../../components/BackButton";

interface PlantSaveParams {
  plant: PlantDTO;
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as PlantSaveParams;

  return (
    <Container>
      <StatusBar />
      <Header>
        <BackButton />
        <ImageWrapper>
          <SvgFromUri uri={plant.photo} height="100%" />
        </ImageWrapper>
        <Name>{plant.name}</Name>
        <Description numberOfLines={2}>{plant.about}</Description>
      </Header>
      <Content>
        <WateringTip>
          <WaterdropSvg width={56} />
          <TipText>{plant.water_tips}</TipText>
        </WateringTip>

        <ContentText>Escolha o melhor horário para ser lembrado:</ContentText>
      </Content>
      <RegisterButton>
        <ButtonText>Cadastrar planta</ButtonText>
      </RegisterButton>
    </Container>
  );
}
