import React from 'react';

import { Container, SecondaryBackground, Title } from './styles';

import GoBack from '../GoBack';
import Input from '../Input';
import NextButton from '../NextButton';

const RegisterPageComponent: React.FC = () => {
  return (
    <Container>
      <GoBack />

      <SecondaryBackground>
        <Title>É bom ter-te connosco!</Title>

        <NextButton color="#1458e0" navigation="Home" name=">" key="name" />
      </SecondaryBackground>
    </Container>
  );
};

export default RegisterPageComponent;
