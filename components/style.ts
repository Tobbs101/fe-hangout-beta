import styled from 'styled-components/native';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Colors } from './colors';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

const { primary, secondary, customGray } = Colors;

interface StyledContainerProps {
  padding?: string;
}

interface WelcomeLogoProps {
  source: ImageSourcePropType;
}

interface TitleProps {
  fontSize?: number;
}

interface SubTitleProps {
  fontSize?: number;
}

export const StyledContainer = styled.View<StyledContainerProps>`
  flex: 1;
  padding: ${({ padding }) => padding || '25px'};
  padding-top: ${({ padding }) => padding || `${statusBarHeight + 10}px`};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeLogo = styled(Image)<WelcomeLogoProps>`
  width: 300px;
  height: 243px;
`;

export const Title = styled(Text)<TitleProps>`
  font-size: ${({ fontSize }) => fontSize || 50}px;
  text-align: left;
  font-weight: bold;
  color: ${primary};
  padding: 10px;
`;

export const SubTitle = styled(Text)<SubTitleProps>`
  font-size: ${({ fontSize }) => fontSize || 18}px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
`;
