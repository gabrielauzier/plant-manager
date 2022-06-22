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
  font-size: ${RFValue(36)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  text-align: center;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.body_light,
}))`
  width: ${RFValue(260)}px;
  border-bottom-width: 1px;
  font-size: ${RFValue(17)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  padding: 12px 0;
  text-align: center;
  margin: 40px 0;
`;
