import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #1458e0;
`;

export const LandingText = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 24px;
  color: #fffffc;

  max-width: 265px;
  margin-top: 60px;
  align-self: center;
  justify-content: center;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  width: 250px;
  height: 60px;
  border-radius: 8px;
  background: #fff;

  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #1458e0;
  font-family: Roboto_700Bold;
  font-size: 21px;
`;
