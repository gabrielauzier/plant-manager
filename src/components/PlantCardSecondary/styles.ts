import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  padding: 16px 18px;
  border-radius: 20px;
` as unknown as typeof RectButton;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(16)}px;
`;

export const ImageWrapper = styled.View`
  width: 60px;
  height: 60px;
`;

export const WaterTime = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const WaterText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_light};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(20)}px;
  margin-bottom: 2px;
`;

export const WaterHour = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(20)}px;
`;
