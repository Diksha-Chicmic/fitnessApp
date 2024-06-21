/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler'
import RootNavigator from './src/Navigation/RootNavigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider } from "react-redux";
import { store, persistor } from './src/Redux/Store';
import { PersistGate } from "redux-persist/integration/react";
import {SheetProvider} from 'react-native-actions-sheet';
import './src/Constants/sheet'
// GoogleSignin.configure(); 
function App(): React.JSX.Element {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '578521058439-sninde3lkghvbbdeta52iaa1a0nq5er6.apps.googleusercontent.com',
    });
  }, [])


  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SheetProvider>
        <RootNavigator />
        </SheetProvider>
      </PersistGate>
    </Provider>

  );
}


export default App;
