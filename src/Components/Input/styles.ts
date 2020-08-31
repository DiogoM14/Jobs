import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
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
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  color: #4f4f4f;
  margin: 0 10px;
`;
