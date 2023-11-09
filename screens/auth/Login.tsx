import React from 'react';
import { StyledContainer, Title, WelcomeLogo } from '../../components/style';
import { StatusBar } from 'expo-status-bar';
import { ImageRequireSource } from 'react-native';

interface LoginProps {
  source: ImageRequireSource;
}

const Login: React.FC<LoginProps> = ({ source }) => {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <Title>Hello!</Title>
      <WelcomeLogo resizeMode='contain' source={source} />
    </StyledContainer>
  );
};

export default Login;