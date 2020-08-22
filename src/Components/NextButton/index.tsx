import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonText } from './styles';

interface ButtonProps {
  name: string;
  color: string;
  navigation: string;
}

const NextButton: React.FC<ButtonProps> = ({ name, color, navigation }) => {
  const goToPage = navigation;
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate(goToPage);
  }
  return (
    <Container>
      <Button onPress={handleNavigate}>
        <ButtonText>{name}</ButtonText>
      </Button>
    </Container>
  );
};

export default NextButton;
