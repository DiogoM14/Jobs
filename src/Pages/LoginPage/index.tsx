import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import {
  Container,
  GoBackButton,
  GoBackText,
  GoBackContainer,
  SecondaryBackground,
  Title,
  Separator,
  Register,
  IconContainer,
  Icon,
  RegisterText,
  FacebookButton,
  GoogleButton,
} from './styles';

import Input from '../../Components/Input';
import NextButton from '../../Components/NextButton';

import Facebook from '../../assets/icons/facebook.png';
import Google from '../../assets/icons/google.png';

const LoginPage: React.FC = () => {
  // const goToBack = navigation;
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Landing');
  }
  return (
    <Container>
      <GoBackContainer>
        <GoBackButton onPress={handleNavigate}>
          <Feather name="arrow-left" color="#1458E0" size={20} />

          <GoBackText>Voltar</GoBackText>
        </GoBackButton>
      </GoBackContainer>

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

        <Register>Regista-te na nossa plataforma</Register>
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
