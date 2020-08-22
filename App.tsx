import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import AppStack from './src/Router/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
};

export default App;
