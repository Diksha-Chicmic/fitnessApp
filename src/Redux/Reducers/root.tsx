import { combineReducers } from "@reduxjs/toolkit";
import  currentUserReducer  from "./currentUser";
import  healthReducer from './userHealth'
import mealReducer from './dishes'
import settingsReducer from './userSettings'
const rootReducer = combineReducers({
    User: currentUserReducer,
    Health:healthReducer,
    Dishes:mealReducer,
    settings:settingsReducer
})

export type RootReducer = typeof rootReducer;
export default rootReducer