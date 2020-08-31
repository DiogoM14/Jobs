import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Container, GoBackButton, GoBackText } from './styles';

const GoBack: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Landing');
  }
  return (
    <Container>
      <GoBackButton onPress={handleNavigate}>
        <Feather name="arrow-left" color="#1458E0" size={20} />

        <GoBackText>Voltar</GoBackText>
      </GoBackButton>
    </Container>
  );
};

export default GoBack;
