import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { PlantProps } from "../../libs/storage";

import {
  Container,
  ImageWrapper,
  Name,
  WaterTime,
  WaterText,
  WaterHour,
} from "./styles";

interface PlantCardSecondaryProps extends RectButtonProps {
  plant: PlantProps;
}

export function PlantCardSecondary({
  plant,
  ...rest
}: PlantCardSecondaryProps) {
  return (
    <Container {...rest}>
      <ImageWrapper>
        <SvgFromUri uri={plant.photo} width={60} height={60} />
      </ImageWrapper>
      <Name>{plant.name}</Name>
      <WaterTime>
        <WaterText>Regar às</WaterText>
        <WaterHour>{plant.hourFormatted}</WaterHour>
      </WaterTime>
    </Container>
  );
}
