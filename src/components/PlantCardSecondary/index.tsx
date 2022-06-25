import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { PlantDTO } from "../../dtos/PlantDTO";

import {
  Container,
  ImageWrapper,
  Name,
  WaterTime,
  WaterText,
  WaterHour,
} from "./styles";

interface PlantCardSecondaryProps extends RectButtonProps {
  plant?: PlantDTO;
}

export function PlantCardSecondary({
  plant,
  ...rest
}: PlantCardSecondaryProps) {
  return (
    <Container {...rest}>
      <ImageWrapper>
        <SvgFromUri
          uri={
            plant?.photo ??
            "https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/6.svg"
          }
          width={60}
          height={60}
        />
      </ImageWrapper>
      <Name>{plant?.name ?? "Yucca"}</Name>
      <WaterTime>
        <WaterText>Regar às</WaterText>
        <WaterHour>10:00</WaterHour>
      </WaterTime>
    </Container>
  );
}
