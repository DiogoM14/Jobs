import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View``;

export const InputContent = styled.View<ContainerProps>`
  width: 300px;
  height: 60px;
  margin-top: 50px;
  background: #e6f4fe;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const InputComponent = styled.TextInput`
  color: #4f4f4f;
  font-family: Roboto_400Regular;
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  margin: 0 12px;
`;

export const UnderlineOnFocus = styled.View<ContainerProps>`
  width: 250px;
  height: 1px;
  bottom: 1px;
  background: #1458f0;
  opacity: 0;
  left: 25px
    ${props =>
      props.isFocused &&
      css`
        opacity: 1;
      `};
`;

export const UnderlineOnFocusSmall = styled(UnderlineOnFocus)`
  width: 150px;
`;
