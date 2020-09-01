import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  SecondaryBackground,
  Title,
  Separator,
  Register,
  IconContainer,
  Icon,
  RegisterText,
  FacebookButton,
  GoogleButton,
  RegisterTextContainer,
} from './styles';

import Input from '../../Components/Input';
import NextButton from '../../Components/NextButton';

import Facebook from '../../assets/icons/facebook.png';
import Google from '../../assets/icons/google.png';
import GoBack from '../../Components/GoBack';

const LoginPage: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToRegister() {
    navigate('Register');
  }
  return (
    <Container>
      <GoBack />

      <SecondaryBackground>
        <Title>Bem vindo ao Jobs</Title>

        <Input name="user" placeholder="Nome de Utilizador" />
        <Input name="lock" placeholder="Palavra Passe" />

        <NextButton
          color="#1458e0"
          navigation="Home"
          name="Entrar"
          key="name"
        />

        <Separator />

        <RegisterTextContainer onPress={handleNavigateToRegister}>
          <Register>Regista-te na nossa plataforma</Register>
        </RegisterTextContainer>
        <IconContainer>
          <FacebookButton>
            <Icon source={Facebook} />
          </FacebookButton>
          <RegisterText>ou</RegisterText>
          <GoogleButton>
            <Icon source={Google} />
          </GoogleButton>
        </IconContainer>
      </SecondaryBackground>
    </Container>
  );
};

export default LoginPage;
