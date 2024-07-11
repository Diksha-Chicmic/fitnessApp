export interface MealsSelected {
    mealTime: {
      snack: boolean;
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
    };
  };
export interface DishSelectorProps{
    title:string,
    mealTime: MealsSelected['mealTime'];

}