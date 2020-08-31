import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LandingBackground from '../../assets/images/landing-background.png';

import {
  Container,
  LandingText,
  Button,
  ButtonContainer,
  ButtonText,
} from './styles';

const LandingPage: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate('Login');
  }
  return (
    <Container>
      <Image source={LandingBackground} />

      <LandingText>
        Estas desempregado e à procura de trabalho? Não te preocupes, vamos
        começar.
      </LandingText>

      <ButtonContainer>
        <Button onPress={handleNavigateToLogin}>
          <ButtonText>Começar</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
