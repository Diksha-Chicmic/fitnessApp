import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type Meal = {
  name: string;
  carbs: number;
  fat: number;
  protein: number;
  calories: number;
  serving_size_g: number;
};
export type DailyMeals = {
  snack: Array<Meal>;
  breakfast: Array<Meal>;
  lunch: Array<Meal>;
  dinner: Array<Meal>;
};
export type Meals = {
  snack: Meal;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
};

const initialState: {data: DailyMeals, lastUpdated:string} = {
  data: {
    snack: [],
    breakfast: [],
    lunch: [],
    dinner: [],
  },
  lastUpdated: new Date().toISOString().split('T')[0],
};

export const mealsSlice = createSlice({
  name: 'dailyMeals',
  initialState,
  reducers: {
    updateAllMealData: (state, action: PayloadAction<DailyMeals>) => {
      state.data.snack.push(...action.payload.snack);
      state.data.breakfast.push(...action.payload.breakfast);
      state.data.lunch.push(...action.payload.lunch);
      state.data.dinner.push(...action.payload.dinner);
      state.lastUpdated = new Date().toISOString().split('T')[0];
    },
    resetMealData: state => {
      state.data = initialState.data;
      state.lastUpdated = new Date().toISOString().split('T')[0];
    },
    resetMealDataItems: (state, action: PayloadAction<Partial<DailyMeals>>) => {
      state.data = {...state.data, ...action.payload};
    },
    checkAndResetData:(state)=>{
        const currentDate = new Date().toISOString().split('T')[0];
        if (state.lastUpdated !== currentDate) {
          state.data = initialState.data;
          state.lastUpdated = currentDate;
        }
      },
    
  },
});


export const { updateAllMealData, resetMealData,resetMealDataItems,checkAndResetData } =mealsSlice.actions ;
export default mealsSlice.reducer;


