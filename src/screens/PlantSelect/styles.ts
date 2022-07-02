import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Environment } from ".";
import { PlantDTO } from "../../dtos/PlantDTO";

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

export const Greetings = styled.View``;

export const GreetingMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(36)}px;
`;

export const Username = styled.Text`
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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(17)}px;
  padding-left: ${RFValue(32)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(17)}px;
  padding-left: ${RFValue(32)}px;
`;

export const Environments = styled.View`
  flex-direction: row;
  padding-left: ${RFValue(32)}px;
  margin-top: ${RFValue(32)}px;
`;

export const EnvironmentList = styled(
  FlatList as new (props: FlatListProps<Environment>) => FlatList<Environment>
).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const Plants = styled.View``;

export const PlantList = styled(
  FlatList as new (props: FlatListProps<PlantDTO>) => FlatList<PlantDTO>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${RFValue(32)}px;
  flex-grow: 1;
`;

export const Sorry = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SorryMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.body_dark};
  font-size: ${RFValue(13)}px;
  padding: 0 ${RFValue(42)}px;
  text-align: center;
`;
