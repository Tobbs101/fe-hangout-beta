import styled from 'styled-components/native';
import { View,Text,Image } from 'react-native';
import { Colors } from './colors';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

const { primary, secondary, customGray } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeLogo = styled.Image`
  width: 300px;
  height: 243px;
`;

export const Title = styled.Text`
  font-size: 50px;
  text-align: left;
  font-weight: bold;
  color: ${primary};
  padding:10px;
`;
