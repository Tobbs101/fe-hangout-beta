import React from 'react';
import { StyledContainer, InnerContainer, Title, WelcomeLogo } from '../../components/style';

const Login = () => {
  return (
    <StyledContainer>
        <Title>Hello!</Title>
        <WelcomeLogo resizeMode='contain' source={require('../../assets/login.jpg')} />
    </StyledContainer>
  );
};

export default Login;
