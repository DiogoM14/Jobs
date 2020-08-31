import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 55px;
  margin-left: 20px;
`;

export const GoBackButton = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
`;

export const GoBackText = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 20px;
  color: #1458e0;
  margin-left: 10px;
`;
