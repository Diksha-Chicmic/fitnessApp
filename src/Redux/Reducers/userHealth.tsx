import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Timestamp } from "@react-native-firebase/firestore";
import { Health } from "../../Defs/user";

export type initial = {
    data: Health,
    goalAchieved:{
        modalShown:boolean
    }
}

const initialState: initial  = {
    data: {
        hasPremission: false,
        totalSteps: 0,
        dailyGlass: 0,
        nutrition: 0,
       // currentTime: Timestamp.now(),
       currentTime: Timestamp.now().toDate().getTime(),
       currentDate: new Date().toISOString(),
        goals: {
            totalGlasses: 8,
            stepsGoal: 10000,
            totalNutrition: 120,
        },
       

    },
    goalAchieved:{
        modalShown:false
    }
}

const healthSlice = createSlice({
    name:'health',
    initialState,
    reducers:{
        updateHealthData:(
            state,
            action: PayloadAction<Partial<initial["data"]>>
        )=>{
            state.data={...state.data, ...action.payload}
        },
       resetHealthData:(
          state
       )=>{
           state.data={
            ...state.data,
            ...{
                nutrition:0,
                dailyGlass:0,
                totalSteps:0,
                currentTime:Timestamp.now(),
                currentDate: new Date().toISOString(),
            }
           }
       },
       setModalShown: (
        state,
        action: PayloadAction<boolean>
    ) => {
        state.goalAchieved.modalShown = action.payload;
    }
    }

})

export const { updateHealthData, resetHealthData ,setModalShown} = healthSlice.actions;
export default healthSlice.reducer;

