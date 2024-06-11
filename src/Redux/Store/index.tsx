import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore,
  } from 'redux-persist'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer,{RootReducer} from '../Reducers/root'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);


  export type RootState = ReturnType<RootReducer>
  export type AppDispatch = typeof store.dispatch


  export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();