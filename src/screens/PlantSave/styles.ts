import { Dimensions, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${windowHeight * 0.6}px;
  padding: ${RFValue(32)}px;
`;

export const ImageWrapper = styled.View`
  height: ${RFValue(160)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(24)}px;
  margin-top: ${RFValue(32)}px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(25)}px;
  margin: 0 1px;
  margin-top: ${RFValue(16)}px;
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${RFValue(32)}px;
`;

export const WateringTip = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  border-radius: 20px;
  position: relative;
  top: -${RFValue(45)}px;
  margin-bottom: -${RFValue(30)}px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(16)}px;
`;

export const TipText = styled(Text)`
  max-width: 70%;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${RFValue(15)}px;
  margin-left: ${RFValue(13)}px;
`;

export const ContentText = styled(Text)`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(23)}px;
  margin-left: ${RFValue(13)}px;
`;

export const RegisterButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 16px;
  border-radius: 15px;
  align-items: center;
  margin: 0 ${RFValue(32)}px ${RFValue(12)}px;
` as unknown as typeof RectButton;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;
`;

export const DateTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.green};
  font-size: ${RFValue(28)}px;
  margin-left: ${RFValue(14)}px;
`;
