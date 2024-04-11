import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/Navigation';
import MainScreen from './src/bottomTab/MainScreen';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
