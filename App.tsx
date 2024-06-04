/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import SignIn from './src/Screens/SignIn';
import LandingPage from './src/Screens/LandingPage';
import RootNavigator from './src/Navigation/RootNavigation';

function App(): React.JSX.Element {
  

  return (
    <RootNavigator/>
  );
}


export default App;
