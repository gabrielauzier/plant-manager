import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(16)}px;
  margin: ${RFValue(4)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(12)}px;
  text-align: center;
`;

export const Image = styled.Image`
  width: ${RFValue(50)}px;
`;

export const ImageWrapper = styled.View`
  width: 70px;
  height: 70px;
`;
