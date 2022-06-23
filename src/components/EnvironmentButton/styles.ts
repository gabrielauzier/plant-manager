import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps extends RectButtonProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${RFValue(76)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;
  margin-right: ${RFValue(4)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.green_light : theme.colors.shape};
` as any;

interface TitleProps {
  isActive: boolean;
}

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.green_dark : theme.colors.body_dark};
  font-family: ${({ theme, isActive }) =>
    isActive ? theme.fonts.semibold : theme.fonts.regular};
  font-size: ${RFValue(13)}px;
`;
