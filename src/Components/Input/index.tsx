import React, { useState, useCallback } from 'react';

import {
  Container,
  InputComponent,
  Icon,
  UnderlineOnFocus,
  InputContent,
} from './styles';

interface InputProps {
  placeholder?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <InputContent isFocused={isFocused}>
        <Icon name={name} size={20} color={isFocused ? '#1458f0' : '#4F4F4F'} />

        <InputComponent
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
        />
      </InputContent>

      <UnderlineOnFocus isFocused={isFocused} />
    </Container>
  );
};

export default Input;
