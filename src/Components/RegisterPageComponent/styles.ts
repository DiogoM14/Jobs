import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #9ad0f5;
`;

export const SecondaryBackground = styled.View`
  width: 100%;
  height: 85%;
  border-radius: 20px;
  background: #fffffc;
  margin-top: 10%;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: Roboto_700Bold;
  text-align: center;
  max-width: 165px;
  margin-top: 62px;
`;
