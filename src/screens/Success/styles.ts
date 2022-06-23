import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Emoji = styled.Text`
  font-size: ${RFValue(96)}px;
  margin-bottom: ${RFValue(64)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  margin-bottom: ${RFValue(16)}px;
  text-align: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(25)}px;
  margin-bottom: ${RFValue(40)}px;
  text-align: center;
`;
