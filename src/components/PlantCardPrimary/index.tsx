import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { SvgFromUri } from "react-native-svg";
import { Container, Image, ImageWrapper, Name } from "./styles";

interface PlantCardPrimaryProps extends RectButtonProps {
  name: string;
  imageURL: string;
}

export function PlantCardPrimary({
  name,
  imageURL,
  ...rest
}: PlantCardPrimaryProps) {
  return (
    <Container {...rest}>
      <ImageWrapper>
        <SvgFromUri uri={imageURL} width={70} height={70} />
      </ImageWrapper>
      <Name>{name}</Name>
    </Container>
  );
}
