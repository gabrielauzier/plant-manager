import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import WateringSvg from "../../assets/watering.svg";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(38)}px;
  text-align: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(25)}px;
  text-align: center;
`;

export const Illustration = styled(WateringSvg).attrs({
  width: "100%",
})`
  margin: ${RFValue(24)}px 0;
`;

export const Button = styled(RectButton)`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  margin-top: ${RFValue(24)}px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green};
` as unknown as typeof RectButton;
