import { combineReducers } from "@reduxjs/toolkit";
import  currentUserReducer  from "./currentUser";
import  healthReducer from './userHealth'
const rootReducer = combineReducers({
    User: currentUserReducer,
    Health:healthReducer
})

export type RootReducer = typeof rootReducer;
export default rootReducer