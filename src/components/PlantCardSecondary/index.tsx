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
  RemoveButton,
} from "./styles";

import { Swipeable } from "react-native-gesture-handler";
import Animated, { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface PlantCardSecondaryProps extends RectButtonProps {
  plant: PlantProps;
  onRemove: () => void;
}

export function PlantCardSecondary({
  plant,
  onRemove,
  ...rest
}: PlantCardSecondaryProps) {
  const theme = useTheme();

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View
          style={{
            backgroundColor: theme.colors.red,
            width: 60,
            height: 80,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              overflow: "hidden",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              position: "relative",
              left: -20,
              backgroundColor: theme.colors.red,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RemoveButton activeOpacity={0} onPress={onRemove}>
              <Feather
                name="trash"
                size={32}
                color="white"
                style={{ position: "relative", left: 10 }}
              />
            </RemoveButton>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
}
