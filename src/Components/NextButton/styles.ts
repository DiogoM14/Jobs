import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  width: 250px;
  height: 60px;
  border-radius: 8px;
  background: #1458e0;

  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: Roboto_700Bold;
  font-size: 21px;
`;
