import React from 'react';

import { Container, InputComponent, Icon } from './styles';

interface InputProps {
  placeholder: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name }) => {
  return (
    <Container>
      <Icon name={name} size={20} />

      <InputComponent placeholder={placeholder} />
    </Container>
  );
};

export default Input;
