import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputComponent = styled.TextInput`
  width: 300px;
  height: 60px;

  background: #e6f4fe;
  color: #4f4f4f;
  border-radius: 8px;
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  color: #4f4f4f;
  margin-right: 5px;
`;
