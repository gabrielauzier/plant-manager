import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

export const HeaderTitle = styled.View``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(36)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(36)}px;
`;

export const UserProfile = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(40)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px ${RFValue(32)}px;
`;

export const WateringTip = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  border-radius: 20px;
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
  line-height: ${RFValue(23)}px;
`;

export const Subtitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(24)}px;

  margin: ${RFValue(40)}px 0 ${RFValue(16)}px;
`;
