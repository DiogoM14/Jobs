import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../Pages/LandingPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={LandingPage} />
        <Screen name="Login" component={LoginPage} />
        <Screen name="Home" component={HomePage} />
        <Screen name="Register" component={RegisterPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
