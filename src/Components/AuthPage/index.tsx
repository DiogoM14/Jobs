import React from 'react';

import { Container, GoBack, SecondaryBackground, Title } from './styles';

const AuthPage: React.FC = () => {
  return (
    <Container>
      <GoBack>Voltar</GoBack>

      <SecondaryBackground>
        <Title>OLá</Title>
      </SecondaryBackground>
    </Container>
  );
};

export default AuthPage;
