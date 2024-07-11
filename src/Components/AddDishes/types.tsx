export type MealsSelected = {
    mealTime: {
      snack: boolean;
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
    };
   // foodData: Array<Meal>;
   foodData:any
  };
  export interface ChoosedishesProps{
    setModalFalse:()=>void
  }