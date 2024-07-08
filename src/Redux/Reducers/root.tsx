import { combineReducers } from "@reduxjs/toolkit";
import  currentUserReducer  from "./currentUser";
import  healthReducer from './userHealth'
import mealReducer from './dishes'
const rootReducer = combineReducers({
    User: currentUserReducer,
    Health:healthReducer,
    Dishes:mealReducer
})

export type RootReducer = typeof rootReducer;
export default rootReducer