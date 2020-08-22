import React from 'react';
import { Image } from 'react-native';
import LandingBackground from '../../assets/images/landing-background.png';

import { Container, LandingText } from './styles';
import NextButton from '../../Components/NextButton';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Image source={LandingBackground} />

      <LandingText>
        Estas desempregado e à procura de trabalho? Não te preocupes vamos
        começar.
      </LandingText>

      <NextButton navigation="Login" name="Começar" color="#fff" />
    </Container>
  );
};

export default LandingPage;
