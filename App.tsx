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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RealmProvider, useRealm } from '@realm/react';
import './src/Constants/sheet'
import { UserDb, UserInterestDb, UserPreferencesDb } from './src/DbModels /user';
import { PostDb } from './src/DbModels /post';
import { StoryDb, AllStoryDb } from './src/DbModels /story';
import { MealsDb,ItemsDb } from './src/DbModels /meals';

function App(): React.JSX.Element {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '578521058439-sninde3lkghvbbdeta52iaa1a0nq5er6.apps.googleusercontent.com',
    });
  }, [])


  return (
     <RealmProvider schema={[UserDb,PostDb,StoryDb,AllStoryDb,MealsDb,ItemsDb,UserInterestDb,UserPreferencesDb]}>
<GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SheetProvider>
        <RootNavigator />
        </SheetProvider>
      </PersistGate>
    </Provider>
    </GestureHandlerRootView>
     </RealmProvider>

  );
}


export default App;
