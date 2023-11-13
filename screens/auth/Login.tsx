import React from 'react';
import { Container, Title, WelcomeLogo } from '../../components/style';
import { StatusBar } from 'expo-status-bar';
import { ImageRequireSource } from 'react-native';



const Login: React.FC = () => {
  return (
    <Container>
      <StatusBar style="dark" />
      <Title>Hello!</Title>
    </Container>
  );
};

export default Login;
