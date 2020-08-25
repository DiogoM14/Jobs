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
} from './styles';
import Input from '../../Components/Input';

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
      </SecondaryBackground>
    </Container>
  );
};

export default LoginPage;
